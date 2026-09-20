import Link from "next/link";
import type { LocalizedContent } from "../../content";
import styles from "./SelectedWork.module.css";

type SelectedWorkCopy = LocalizedContent["selectedWork"];

export function SelectedWork({ copy }: { copy: SelectedWorkCopy }) {
  return (
    <section id="selected-work" className={styles.section} aria-labelledby="selected-work-heading">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>04 / WORK</p>
          <h2 id="selected-work-heading">{copy.heading}</h2>
        </div>
        <p className={styles.note}>{copy.eyebrow}</p>
      </div>
      <article className={`${styles.project} ${styles.flagship}`}>
        <div className={styles.visual} role="img" aria-label={copy.placeholder}>
          <span>{copy.placeholder}</span>
          <i aria-hidden="true" />
        </div>
        <div className={styles.projectInfo}>
          <p className={styles.projectType}>FLAGSHIP</p>
          <h3>{copy.flagship.title}</h3>
          <p>{copy.flagship.description}</p>
          <Link className={styles.link} href="/case-study">{copy.flagship.link} <span aria-hidden="true">-&gt;</span></Link>
        </div>
      </article>
      <div className={styles.supportingGrid}>
        {copy.projects.map((project) => (
          <article key={project.title} className={styles.project}>
            <div className={styles.smallVisual} role="img" aria-label={copy.placeholder}><span>{copy.placeholder}</span></div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
