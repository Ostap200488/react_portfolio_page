import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <span className={styles.label}>Get in Touch</span>
        <h2>Contact</h2>
        <p>
          Feel free to reach out for opportunities, collaboration, or just to
          connect.
        </p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:ostap.04.0604.67@gmail.com">
            ostap.04.0604.67@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/ostap2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ostap2004
          </a>
        </li>

        <li className={styles.link}>
          <a
            href="https://github.com/Ostap200488"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Ostap200488
          </a>
        </li>
      </ul>
    </footer>
  );
};