import Link from "next/link";
import type { LocalizedContent } from "../../content";
import styles from "./CaseStudy.module.css";

type CaseStudyCopy = LocalizedContent["caseStudy"];

export function CaseStudy({ copy }: { copy: CaseStudyCopy }) {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Case study navigation"><Link href="/#selected-work">&lt;- {copy.back}</Link></nav>
      <header className={styles.header}>
        <p className={styles.eyebrow}>05 / CASE STUDY</p>
        <h1>{copy.title}</h1>
        <p>{copy.purpose}</p>
      </header>
      <div className={styles.visual} role="img" aria-label={copy.visual}>{copy.visual}</div>
      <div className={styles.story}>
        {copy.sections.map((section) => <section key={section.title} aria-labelledby={`case-${section.title}`}><h2 id={`case-${section.title}`}>{section.title}</h2><p>{section.value}</p></section>)}
      </div>
    </main>
  );
}
