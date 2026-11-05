"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/lib/data";

type Line = { cmd: string; out: React.ReactNode };

const script: Line[] = [
  { cmd: "whoami", out: <>chris hirwa <span className="text-dim">(a.k.a. moon)</span></> },
  {
    cmd: "cat stack.txt",
    out: <>next.js · typescript · postgres · drizzle · tailwind</>,
  },
  {
    cmd: "ls ./shipped",
    out: (
      <span className="flex flex-wrap gap-x-4 text-amber">
        <span>ngali-mining/</span>
        <span>lauture-global/</span>
        <span>culture-plug/</span>
        <span>careerbridge/</span>
      </span>
    ),
  },
  {
    cmd: "status --now",
    out: (
      <span className="text-accent">
        ● open to client projects &amp; full-time roles
      </span>
    ),
  },
];

function useTyped(lines: Line[]) {
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLineIdx(lines.length);
      setDone(true);
      return;
    }
    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }
    const cmd = lines[lineIdx].cmd;
    const t = setTimeout(
      () => {
        if (chars < cmd.length) setChars((c) => c + 1);
        else {
          setLineIdx((i) => i + 1);
          setChars(0);
        }
      },
      chars === 0 ? 450 : chars < cmd.length ? 45 + Math.random() * 50 : 280,
    );
    return () => clearTimeout(t);
  }, [lineIdx, chars, lines]);

  return { lineIdx, chars, done };
}

export default function Hero() {
  const { lineIdx, chars, done } = useTyped(script);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-24 pt-32 sm:px-6 md:pt-40 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work · {profile.location}
            </p>
          )}

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Chris Hirwa<span className="text-accent">.</span>
          </h1>
          <p className="mt-3 text-sm text-dim">
            // {profile.role.toLowerCase()} · friends call me moon
          </p>

          <p className="mt-8 max-w-xl font-display text-xl leading-snug text-fg/90 sm:text-2xl">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <a
              href="#work"
              className="rounded bg-accent px-5 py-3 font-medium text-bg transition hover:brightness-110"
            >
              view my work →
            </a>
            <a
              href="#contact"
              className="rounded border border-line-strong px-5 py-3 text-fg transition hover:border-accent hover:text-accent"
            >
              start a project
            </a>
            {profile.cv && (
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${profile.cv}`}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-3 text-muted underline-offset-4 transition hover:text-accent hover:underline"
              >
                cv.pdf ↓
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/50"
          aria-label="Terminal introduction"
        >
          <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose/80" />
            <span className="h-3 w-3 rounded-full bg-amber/80" />
            <span className="h-3 w-3 rounded-full bg-accent/80" />
            <span className="ml-3 text-xs text-dim">moon@kigali: ~</span>
          </div>
          <div className="min-h-[300px] space-y-4 p-5 text-[13px] leading-relaxed sm:p-6 sm:text-sm">
            {script.map((line, i) => {
              if (i > lineIdx) return null;
              const typing = i === lineIdx;
              return (
                <div key={line.cmd}>
                  <p className={typing && !done ? "caret" : ""}>
                    <span className="text-accent">❯</span>{" "}
                    <span className="text-fg">{typing ? line.cmd.slice(0, chars) : line.cmd}</span>
                  </p>
                  {!typing && <p className="mt-1 pl-4 text-muted">{line.out}</p>}
                </div>
              );
            })}
            {done && (
              <p className="caret">
                <span className="text-accent">❯</span>{" "}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
