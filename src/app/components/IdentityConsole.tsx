"use client";

import { useEffect, useState } from "react";

const LOG_LINES = [
  { prefix: "[SYSTEM]", suffix: " Authenticating Agent...", prefixClass: "text-zinc-500" },
  { prefix: "[SUCCESS]", suffix: " Scoped access granted to Strands.", prefixClass: "text-emerald-500/80" },
  { prefix: "[INFO]", suffix: " Securing the Last Mile.", prefixClass: "text-amber-600/80" },
];

export function IdentityConsole() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lineIndex >= LOG_LINES.length) {
      const timer = setTimeout(() => {
        setDisplayedText([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const { prefix, suffix } = LOG_LINES[lineIndex];
    const fullLine = prefix + suffix;

    if (charIndex < fullLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const next = [...prev];
          const currentLine = next[lineIndex] ?? "";
          next[lineIndex] = fullLine.slice(0, currentLine.length + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-zinc-800/50 bg-black/40 p-3">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-zinc-600" />
          <span className="size-2 rounded-full bg-zinc-600" />
          <span className="size-2 rounded-full bg-zinc-600" />
        </div>
        <span className="font-mono text-[10px] text-zinc-600">
          identity-console
        </span>
      </div>
      <div className="space-y-0.5 font-mono text-[11px] leading-relaxed">
        {displayedText.map((line, i) => {
          const config = LOG_LINES[i];
          const prefix = config.prefix;
          const hasPrefix = line.startsWith(prefix);
          const rest = hasPrefix ? line.slice(prefix.length) : line;
          return (
            <div key={i}>
              <span className={config.prefixClass}>{prefix}</span>
              <span className="text-zinc-400">{rest}</span>
            </div>
          );
        })}
        {lineIndex < LOG_LINES.length && (
          <span
            className={`inline-block w-2 border-r border-emerald-500/80 ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
    </div>
  );
}
