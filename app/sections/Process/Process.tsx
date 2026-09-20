import type { LocalizedContent } from "../../content";
import styles from "./Process.module.css";

type ProcessCopy = LocalizedContent["process"];

export function Process({ copy }: { copy: ProcessCopy }) {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.steps}>
        <p className={styles.eyebrow}>06 / PROCESS</p>
        <h2 id="process-heading">{copy.heading}</h2>
        <ol>
          {copy.steps.map((step, index) => (
            <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>
          ))}
        </ol>
        <p className={styles.pending}>{copy.pending}</p>
      </div>
      <div className={styles.visual} role="img" aria-label={copy.visual}>
        <div className={styles.orbit} aria-hidden="true"><i /><i /><i /></div>
        <span>01 -&gt; 02 -&gt; 03</span>
      </div>
    </section>
  );
}
