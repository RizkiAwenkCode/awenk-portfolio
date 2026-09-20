import type { LocalizedContent } from "../../content";
import styles from "./Toolbox.module.css";

type ToolboxCopy = LocalizedContent["toolbox"];

export function Toolbox({ copy }: { copy: ToolboxCopy }) {
  return (
    <section className={styles.section} aria-labelledby="toolbox-heading">
      <div className={styles.headingBlock}>
        <p className={styles.eyebrow}>08 / TOOLBOX</p>
        <h2 id="toolbox-heading">{copy.heading}</h2>
        <p className={styles.note}>{copy.note}</p>
      </div>
      <div className={styles.groups}>
        {copy.groups.map((group) => (
          <section key={group.title} className={styles.group} aria-labelledby={`toolbox-${group.title}`}>
            <h3 id={`toolbox-${group.title}`}>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        ))}
      </div>
    </section>
  );
}
