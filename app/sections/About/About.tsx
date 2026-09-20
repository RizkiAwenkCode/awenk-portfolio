import type { LocalizedContent } from "../../content";
import styles from "./About.module.css";

type AboutCopy = LocalizedContent["about"];

export function About({ copy }: { copy: AboutCopy }) {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.left}>
        <p className={styles.eyebrow}>09 / ABOUT</p>
        <h2 id="about-heading">{copy.heading}</h2>
        <p className={styles.introduction}>{copy.introduction}</p>
        <div className={styles.portrait} role="img" aria-label={copy.portrait}><span>{copy.portrait}</span></div>
      </div>
      <div className={styles.right}>
        <h3>{copy.educationHeading}</h3>
        <ul>{copy.education.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}
