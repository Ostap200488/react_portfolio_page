import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ostap</h1>

        <p className={styles.description}>
          Hello! My name is <strong>Ostap Demchuk</strong>. I’m a{" "}
          <strong>Junior Software Developer</strong> who enjoys building{" "}
          <strong>full-stack applications</strong> and learning new technologies
          every day.
        </p>

        <p className={styles.description}>
          I focus on creating <strong>fast</strong>,{" "}
          <strong>responsive</strong>, and <strong>user-friendly</strong>{" "}
          products using <strong>React</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express</strong>, and <strong>MongoDB</strong>.
        </p>

        <p className={styles.description}>
          My goal is to join a team where I can contribute, learn from
          experienced developers, and grow into a strong professional software
          engineer.
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
