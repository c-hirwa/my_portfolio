"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects, stack } from "@/lib/data";
import { Reveal, SectionHead } from "./ui";

type Entry = { cmd: string; out: React.ReactNode };

const COMMANDS = ["help", "whoami", "projects", "stack", "contact", "hire", "hobbies", "clear"];

function run(raw: string): React.ReactNode | "clear" {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return null;

  switch (cmd) {
    case "help":
      return (
        <div className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-0.5">
          {[
            ["whoami", "who's behind the keyboard"],
            ["projects", "list shipped work"],
            ["stack", "tools I reach for"],
            ["contact", "ways to reach me"],
            ["hire", "start a project"],
            ["hobbies", "life outside the editor"],
            ["clear", "wipe the screen"],
          ].map(([c, d]) => (
            <span key={c} className="contents">
              <span className="text-accent">{c}</span>
              <span className="text-muted">{d}</span>
            </span>
          ))}
        </div>
      );
    case "whoami":
      return `${profile.name} — ${profile.role.toLowerCase()} in ${profile.location}. Builds full-stack web platforms and the infrastructure under them.`;
    case "projects":
    case "ls":
      return (
        <ul>
          {projects.map((p) => (
            <li key={p.slug}>
              <span className="text-amber">{p.slug}/</span>{" "}
              <span className="text-dim">— {p.summary.split(" — ")[0].split(".")[0]}</span>
            </li>
          ))}
        </ul>
      );
    case "stack":
      return (
        <div>
          {Object.entries(stack).map(([k, v]) => (
            <p key={k}>
              <span className="text-accent">{k}:</span> <span className="text-muted">{v.join(", ")}</span>
            </p>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="text-muted">
          <p>email &nbsp;&nbsp;→ <a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p>whatsapp → <a className="text-accent hover:underline" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">{profile.phone}</a></p>
          <p>github &nbsp;→ <a className="text-accent hover:underline" href={profile.github} target="_blank" rel="noreferrer">c-hirwa</a></p>
          <p>linkedin → <a className="text-accent hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">chris-hirwa</a></p>
        </div>
      );
    case "hire":
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
      return <span className="text-accent">great choice. taking you to the contact section…</span>;
    case "hobbies":
      return "basketball 🏀 · game dev experiments · reading way too much about AI · local tech meetups";
    case "clear":
      return "clear";
    case "sudo rm -rf /":
    case "sudo":
      return <span className="text-rose">nice try. this incident will be reported. (not really)</span>;
    case "exit":
      return "you can check out any time you like, but you can never leave.";
    case "coffee":
    case "tea":
      return "☕ brewing… estimated time: 1 bug fix.";
    default:
      return (
        <span className="text-muted">
          command not found: <span className="text-rose">{cmd}</span> — try <span className="text-accent">help</span>
        </span>
      );
  }
}

export default function Terminal() {
  const [history, setHistory] = useState<Entry[]>([
    { cmd: "help", out: run("help") },
  ]);
  const [input, setInput] = useState("");
  const [past, setPast] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  const submit = (value: string) => {
    const out = run(value);
    if (out === "clear") setHistory([]);
    else setHistory((h) => [...h, { cmd: value, out }]);
    if (value.trim()) setPast((p) => [value, ...p]);
    setPointer(-1);
    setInput("");
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit(input);
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(pointer + 1, past.length - 1);
      if (past[next] !== undefined) {
        setPointer(next);
        setInput(past[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = pointer - 1;
      setPointer(next);
      setInput(next >= 0 ? past[next] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.toLowerCase()) && input);
      if (match) setInput(match);
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHead index="05" cmd="./interactive.sh" title="Or poke around yourself" />
      <Reveal>
        <div
          className="overflow-hidden rounded-lg border border-line bg-surface"
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
        >
          <div className="flex items-center justify-between border-b border-line bg-raised px-4 py-2.5 text-xs text-dim">
            <span>chris@portfolio — zsh</span>
            <span className="hidden sm:inline">tab to autocomplete · ↑↓ history</span>
          </div>
          <div ref={bodyRef} className="h-80 space-y-3 overflow-y-auto p-5 text-[13px] leading-relaxed sm:text-sm">
            {history.map((h, i) => (
              <div key={i}>
                <p>
                  <span className="text-accent">❯</span> <span className="text-fg">{h.cmd}</span>
                </p>
                {h.out && <div className="mt-1 pl-4 text-fg/80">{h.out}</div>}
              </div>
            ))}
            <label className="flex items-center gap-2">
              <span className="text-accent">❯</span>
              <span className="sr-only">Terminal command</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                placeholder="type a command…"
                className="flex-1 bg-transparent text-fg caret-accent outline-none placeholder:text-dim"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
            {COMMANDS.filter((c) => c !== "clear").map((c) => (
              <button
                key={c}
                onClick={(e) => {
                  e.stopPropagation();
                  submit(c);
                }}
                className="rounded border border-line px-2.5 py-1 text-xs text-muted transition hover:border-accent hover:text-accent"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
