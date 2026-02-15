"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#values", label: "Values" },
  { href: "#principles", label: "Principles" },
  { href: "#technical-focus", label: "Technical Focus" },
  { href: "#identity-auth", label: "Identity & Auth" },
  { href: "#career", label: "Career" },
  { href: "#foundations", label: "Education & Founder" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-zinc-400 transition-colors hover:text-zinc-100 whitespace-nowrap";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#"
          className="text-sm font-medium tracking-wider text-zinc-500 uppercase hover:text-zinc-300 sm:text-base"
        >
          prathamsarin.com
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-10 items-center justify-center text-zinc-400 hover:text-zinc-100 sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="border-t border-zinc-800/50 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
