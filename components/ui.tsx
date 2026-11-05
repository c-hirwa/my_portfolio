"use client";

import { motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ index, cmd, title }: { index: string; cmd: string; title: string }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="text-sm text-dim">
        <span className="text-accent">{index}</span> <span className="text-muted">$</span> {cmd}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-line bg-raised px-2 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}
