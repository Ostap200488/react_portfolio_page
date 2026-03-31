import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <span className={styles.label}>{t("contact.label")}</span>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.description")}</p>
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