"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#work", label: "work" },
  { href: "#services", label: "services" },
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-fg" aria-label="Back to top">
          <Logo className="h-6 w-auto" />
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition-colors hover:text-accent">
                <span className="text-dim">./</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded border border-accent/40 px-3 py-1.5 text-accent transition hover:bg-accent hover:text-bg"
            >
              hire me
            </a>
          </li>
        </ul>

        <button
          className="text-sm text-muted md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-muted hover:text-accent"
              >
                <span className="text-accent">&gt;</span> {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
