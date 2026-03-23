import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ostap</h1>

      <p className={styles.description}>
  Hi! I'm <strong>Ostap Demchuk</strong>, a motivated and driven individual who enjoys
  taking on new challenges and constantly improving myself.
</p>

<p className={styles.description}>
  I am a hardworking and positive person with a strong sense of responsibility. I value
  discipline, consistency, and always giving my best in everything I do.
</p>

<p className={styles.description}>
  I enjoy working with people, learning from others, and growing in environments where I
  can push my limits and develop both personally and professionally.
</p>

<p className={styles.description}>
  My goal is to become a reliable and skilled professional who can contribute to meaningful
  projects and create real impact through my work.
</p>

        <a
          href="mailto:ostap.04.0604.67@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
