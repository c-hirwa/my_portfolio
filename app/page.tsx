import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Experience />
        <Terminal />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-dim sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}. Built from scratch in Kigali.</p>
          <p>
            <span className="text-accent">●</span> next.js · tailwind · deployed with care
          </p>
        </div>
      </footer>
    </>
  );
}
