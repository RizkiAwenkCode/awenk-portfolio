import type { LocalizedContent } from "../../content";
import styles from "./Capabilities.module.css";

type CapabilitiesCopy = LocalizedContent["capabilities"];

export function Capabilities({ copy }: { copy: CapabilitiesCopy }) {
  return (
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-heading">
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>03 / CAPABILITIES</p>
        <h2 id="capabilities-heading" className={styles.heading}>{copy.heading}</h2>
      </div>
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.featured}`}>
          <span className={styles.index}>01</span>
          <div>
            <h3>{copy.frontend.title}</h3>
            <p>{copy.frontend.description}</p>
          </div>
          <div className={styles.signal} aria-hidden="true">&lt; / &gt;</div>
        </article>
        <div className={styles.stack}>
          <article className={styles.card}>
            <span className={styles.index}>02</span>
            <h3>{copy.data.title}</h3>
            <p>{copy.data.description}</p>
          </article>
          <article className={styles.card}>
            <span className={styles.index}>03</span>
            <h3>{copy.integration.title}</h3>
            <p>{copy.integration.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
