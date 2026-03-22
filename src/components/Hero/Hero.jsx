import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ostap</h1>

      <p className={styles.description}>
  Hi! I'm <strong>Ostap Demchuk</strong>, a{" "}
  <strong>Junior Software Developer</strong> passionate about building{" "}
  <strong>real-world full-stack applications</strong> and solving meaningful problems.
</p>

<p className={styles.description}>
  I am a dedicated and versatile developer with a strong commitment to{" "}
  <strong>continuous learning</strong> and self-improvement. I enjoy working in dynamic
  environments where I can collaborate, grow, and turn ideas into functional products.
</p>

<p className={styles.description}>
  I primarily work with <strong>React</strong>, <strong>Node.js</strong>,{" "}
  <strong>Express</strong>, and <strong>MongoDB</strong>, focusing on building{" "}
  <strong>fast</strong>, <strong>responsive</strong>, and{" "}
  <strong>user-friendly</strong> applications.
</p>

<p className={styles.description}>
  I’ve built projects such as real-time chat applications, POS systems, and AI-based tools,
  which helped me develop strong problem-solving skills and a practical understanding of
  modern web development.
</p>

<p className={styles.description}>
  I am currently looking for an opportunity where I can contribute, gain real-world experience,
  and grow into a confident and reliable software engineer.
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
