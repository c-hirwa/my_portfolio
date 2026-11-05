"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const waText = encodeURIComponent("Hi Chris, I found your portfolio and I'd like to talk about a project.");

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <p className="text-sm text-dim">
            <span className="text-accent">06</span> <span className="text-muted">$</span> ./contact --now
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl md:text-6xl">
            Got a project in mind<span className="text-accent">?</span> Let&apos;s build it.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            Whether you need a new website, a system for your team, or someone to finally sort out your
            domain and email — send me a message. I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${profile.email}?subject=Project%20enquiry`}
            className="rounded bg-accent px-5 py-3 font-medium text-bg transition hover:brightness-110"
          >
            email me →
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-line-strong px-5 py-3 text-fg transition hover:border-accent hover:text-accent"
          >
            message on whatsapp
          </a>
          <button
            onClick={copy}
            className="rounded border border-line-strong px-5 py-3 text-muted transition hover:border-accent hover:text-accent"
          >
            {copied ? "✓ copied" : profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-3">
          <div>
            <p className="text-xs text-dim">location</p>
            <p className="mt-1 text-fg">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs text-dim">timezone</p>
            <p className="mt-1 text-fg">{profile.timezone} · works remote</p>
          </div>
          <div>
            <p className="text-xs text-dim">elsewhere</p>
            <p className="mt-1 flex gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-fg hover:text-accent">
                github ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-fg hover:text-accent">
                linkedin ↗
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
