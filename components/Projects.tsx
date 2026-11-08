import { concepts, projects } from "@/lib/data";
import { Reveal, SectionHead, Tag } from "./ui";

function Links({ live, repo }: { live?: string; repo?: string }) {
  if (!live && !repo) return null;
  return (
    <div className="flex gap-4 text-sm">
      {live && (
        <a href={live} target="_blank" rel="noreferrer" className="text-accent hover:underline">
          live ↗
        </a>
      )}
      {repo && (
        <a href={repo} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">
          source ↗
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHead index="01" cmd="ls -la ./work" title="Things I've built for real clients" />

      <div className="space-y-5">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <article className="group grid gap-6 rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong sm:p-8 md:grid-cols-[1fr_1.15fr] md:gap-10">
              <div className="flex flex-col">
                <p className="text-xs text-dim">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> /{" "}
                  {p.client}
                  {p.year && <> · {p.year}</>}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent sm:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <ul className="space-y-3 text-sm leading-relaxed text-fg/85">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-px text-accent">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Links live={p.live} repo={p.repo} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <p className="mb-5 text-sm text-dim">
          <span className="text-muted">$</span> ls ./side-projects
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {more.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-line-strong">
              <p className="text-xs text-dim">{p.client}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-fg">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <Links live={p.live} repo={p.repo} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <p className="text-sm text-dim">
          <span className="text-muted">$</span> ls ./concept-builds
        </p>
        <p className="mt-2 mb-5 max-w-2xl text-sm leading-relaxed text-muted">
          Working demos built for the kinds of businesses I work with. Each one is ready to adapt for a real client.
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {concepts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <article className="flex h-full flex-col rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-line-strong">
              <p className="text-xs text-dim">
                <span className="text-amber">demo</span> · {p.client}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-fg">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-px text-accent">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <Links live={p.live} repo={p.repo} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
