"use client";

import { useEffect, useState } from "react";
import { About } from "./sections/About/About";
import { Capabilities } from "./sections/Capabilities/Capabilities";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Process } from "./sections/Process/Process";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";
import { Toolbox } from "./sections/Toolbox/Toolbox";
import { content, futureSections, type Language } from "./content";

export default function Home() {
  const [language, setLanguage] = useState<Language>("id");
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-navy">
      <a
        className="sr-only fixed left-4 top-4 z-50 rounded-button bg-yellow px-4 py-3 font-semibold text-navy focus:not-sr-only"
        href="#main-content"
      >
        Skip to content
      </a>

      <header className="fixed left-1/2 top-4 z-40 w-[calc(100%-32px)] max-w-[1280px] -translate-x-1/2">
        <nav aria-label="Primary navigation" className="flex min-h-16 flex-wrap items-center justify-between gap-3 rounded-card border border-navy/15 bg-canvas/95 px-4 py-2 shadow-[0_12px_30px_rgba(0,48,96,0.08)] backdrop-blur">
          <a className="rounded-button px-3 py-3 text-lg font-semibold" href="#hero" aria-label="Awenk home">Awenk</a>
          <div className="flex flex-wrap items-center justify-end gap-1">
            {futureSections.map((section) => (
              <a key={section.id} className="rounded-button px-3 py-3 text-base font-medium text-navy/75 hover:bg-surface hover:text-navy" href={`#${section.id}`}>
                {copy.navigation[section.label]}
              </a>
            ))}
            <a className="rounded-button px-3 py-3 text-base font-medium text-navy/75 hover:bg-surface hover:text-navy" href="#contact">{copy.navigation.contact}</a>
            <div className="ml-1 flex min-h-12 items-center rounded-button border border-navy/20 p-1" aria-label={copy.language}>
              <button type="button" aria-pressed={language === "id"} className={`min-h-10 rounded-button px-3 text-sm font-semibold ${language === "id" ? "bg-navy text-canvas" : "text-navy/70 hover:bg-surface"}`} onClick={() => setLanguage("id")}>ID</button>
              <button type="button" aria-pressed={language === "en"} className={`min-h-10 rounded-button px-3 text-sm font-semibold ${language === "en" ? "bg-navy text-canvas" : "text-navy/70 hover:bg-surface"}`} onClick={() => setLanguage("en")}>EN</button>
            </div>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="hero" aria-labelledby="hero-heading" className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-16 px-8 pb-20 pt-36 lg:grid-cols-12 lg:px-20">
          <div className="lg:col-span-6">
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-navy/65">{copy.hero.eyebrow}</p>
            <h1 id="hero-heading" className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight lg:text-7xl">Complexity Simplified</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-navy/75">{copy.hero.description}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="rounded-button inline-flex min-h-12 items-center justify-center bg-navy px-6 font-semibold text-canvas hover:bg-navy/90" href="#selected-work">{copy.hero.workCta}</a>
              <a className="rounded-button inline-flex min-h-12 items-center justify-center border-2 border-navy px-6 font-semibold text-navy hover:bg-surface" href="#contact">{copy.hero.contactCta}</a>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-navy/15 pt-6 text-base font-medium text-navy/75" aria-label="Expertise">
              <li>React &amp; Next.js</li><li>Data &amp; GIS</li><li>Integrasi API</li>
            </ul>
          </div>
          <div className="relative min-h-[420px] lg:col-span-6" role="img" aria-label={copy.hero.visualLabel}>
            <div className="absolute inset-8 rounded-card border border-navy/20 bg-surface" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full border-[24px] border-yellow bg-canvas" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-card border-2 border-navy bg-navy" />
            <div className="absolute bottom-16 right-16 h-36 w-36 rotate-45 border-2 border-yellow bg-canvas" />
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-center font-mono text-xs uppercase leading-5 text-navy">Abstract<br />visual<br />placeholder</div>
          </div>
        </section>

        <Capabilities copy={copy.capabilities} />
        <SelectedWork copy={copy.selectedWork} />
        <Process copy={copy.process} />
        <Experience copy={copy.experience} />
        <Toolbox copy={copy.toolbox} />
        <About copy={copy.about} />
        <Contact copy={copy.contact} />

        <footer className="border-t border-navy/15 bg-navy text-canvas">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-8 py-16 lg:grid-cols-3 lg:px-20">
            <div><p className="font-mono text-sm uppercase tracking-[0.08em] text-canvas/65">Awenk</p><h2 className="mt-4 text-3xl font-semibold">{copy.navigation.contact}</h2><p className="mt-4 max-w-xs text-base leading-7 text-canvas/75">{copy.footer.identity}</p></div>
            <div><h2 className="text-lg font-semibold">{copy.footer.navigation}</h2><div className="mt-4 grid gap-2"><a className="w-fit rounded-button py-2 text-base text-canvas/75 hover:text-canvas" href="#hero">Awenk</a><a className="w-fit rounded-button py-2 text-base text-canvas/75 hover:text-canvas" href="#selected-work">{copy.navigation.work}</a><a className="w-fit rounded-button py-2 text-base text-canvas/75 hover:text-canvas" href="#about">{copy.navigation.about}</a></div></div>
            <div><h2 className="text-lg font-semibold">{copy.footer.contact}</h2><div className="mt-4 grid gap-2">{copy.contact.links.map((link) => <a key={link.href} className="w-fit rounded-button py-2 text-base text-canvas/75 hover:text-canvas" href={link.href}>{link.label}</a>)}</div></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
