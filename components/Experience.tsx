import { experience } from "@/lib/data";
import { Reveal, SectionHead } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <SectionHead index="04" cmd="git log --career" title="Where I've worked" />

        <ol className="relative space-y-10 border-l border-line-strong pl-6 sm:pl-8">
          {experience.map((e, i) => (
            <li key={e.company} className="relative">
              <Reveal delay={i * 0.05}>
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[37px]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {e.role} <span className="text-accent">@ {e.company}</span>
                  </h3>
                  <p className="text-xs text-dim">{e.period}</p>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p}>
                      <span className="text-dim">- </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
