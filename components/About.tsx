import { about, certificates, quickFacts, stack } from "@/lib/data";
import { Reveal, SectionHead } from "./ui";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHead index="03" cmd="cat about.md" title="A bit about me" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-fg/85">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-line bg-surface p-5 text-sm">
            <p className="mb-3 text-xs text-dim">chris.json</p>
            <pre className="overflow-x-auto leading-7">
              <span className="text-muted">{"{"}</span>
              {"\n"}
              {quickFacts.map((f, i) => (
                <span key={f.k}>
                  {"  "}
                  <span className="text-accent">&quot;{f.k}&quot;</span>
                  <span className="text-muted">: </span>
                  <span className="text-amber">&quot;{f.v}&quot;</span>
                  {i < quickFacts.length - 1 && <span className="text-muted">,</span>}
                  {"\n"}
                </span>
              ))}
              <span className="text-muted">{"}"}</span>
            </pre>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(stack).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.05}>
            <div className="h-full rounded-lg border border-line p-5">
              <p className="text-xs text-dim">
                <span className="text-accent">#</span> {group}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-fg/85">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="text-sm text-dim">
          <span className="text-muted">certs:</span>{" "}
          {certificates.map((c, i) => (
            <span key={c} className="text-muted">
              {c}
              {i < certificates.length - 1 && <span className="text-dim"> · </span>}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
