import type { LocalizedContent } from "../../content";
import styles from "./Experience.module.css";

type ExperienceCopy = LocalizedContent["experience"];

export function Experience({ copy }: { copy: ExperienceCopy }) {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>07 / EXPERIENCE</p>
        <h2 id="experience-heading">{copy.heading}</h2>
      </div>
      <ol className={styles.timeline}>
        {copy.entries.map((entry) => (
          <li key={`${entry.date}-${entry.company}`}>
            <time>{entry.date}</time>
            <div className={styles.entry}>
              <h3>{entry.role}</h3>
              <p className={styles.company}>{entry.company}</p>
              <p className={styles.placeholder}>{copy.placeholder}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
