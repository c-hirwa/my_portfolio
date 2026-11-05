import { services } from "@/lib/data";
import { Reveal, SectionHead } from "./ui";

const process = [
  { step: "discover", text: "We talk through what the business needs, not just what the site should look like." },
  { step: "build", text: "You get a working preview link early and see progress every week." },
  { step: "launch", text: "Deployed, tested and live — I handle the technical side." },
  { step: "support", text: "I stick around for fixes, updates and the next phase." },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="02" cmd="man services" title="What I can do for your business" />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col bg-bg p-6 sm:p-8">
                <p className="text-xs text-accent">[{s.id}]</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                <p className="mt-auto pt-5 text-xs text-dim">{s.tags.join("  ·  ")}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <p className="mb-6 text-sm text-dim">
            <span className="text-muted">$</span> cat how-i-work.md
          </p>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.step} className="border-l border-line-strong pl-4">
                <p className="text-sm text-amber">
                  {i + 1}. {p.step}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
