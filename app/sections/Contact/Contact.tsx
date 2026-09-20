"use client";

import { useEffect, useRef, useState } from "react";
import type { LocalizedContent } from "../../content";
import styles from "./Contact.module.css";

type ContactCopy = LocalizedContent["contact"];

export function Contact({ copy }: { copy: ContactCopy }) {
  const linksRef = useRef<HTMLDivElement>(null);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const node = linksRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHighlighted(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div>
        <p className={styles.eyebrow}>10 / CONTACT</p>
        <h2 id="contact-heading">{copy.heading}</h2>
      </div>
      <div ref={linksRef} className={`${styles.links} ${highlighted ? styles.highlight : ""}`}>
        {copy.links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </div>
    </section>
  );
}
