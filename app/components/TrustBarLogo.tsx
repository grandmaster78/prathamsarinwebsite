"use client";

import Image from "next/image";
import { useState } from "react";

interface TrustBarLogoProps {
  name: string;
  src: string;
  badge?: string;
}

export function TrustBarLogo({ name, src, badge }: TrustBarLogoProps) {
  const [error, setError] = useState(false);

  return (
    <span className="group flex items-center gap-2">
      {error ? (
        <span className="font-mono text-[11px] tracking-[0.2em] text-zinc-500 opacity-50 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-zinc-100">
          {name}
        </span>
      ) : (
        <span className="relative block h-5 w-16 opacity-50 transition-opacity duration-200 group-hover:opacity-100 sm:h-6 sm:w-20">
          <Image
            src={src}
            alt=""
            fill
            sizes="80px"
            className="object-contain object-left brightness-0 invert"
            unoptimized
            onError={() => setError(true)}
          />
        </span>
      )}
      {badge && (
        <span className="font-mono text-[10px] tracking-widest text-zinc-600 opacity-75 group-hover:text-zinc-400">
          ({badge})
        </span>
      )}
    </span>
  );
}
