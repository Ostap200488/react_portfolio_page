import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>{t("hero.title")}</h1>

        <p className={styles.description}>{t("hero.description1")}</p>
        <p className={styles.description}>{t("hero.description2")}</p>
        <p className={styles.description}>{t("hero.description3")}</p>
        <p className={styles.description}>{t("hero.description4")}</p>

        <div className={styles.actions}>
          <a
            href="mailto:ostap.04.0604.67@gmail.com"
            className={styles.contactBtn}
          >
            {t("hero.contactBtn")}
          </a>

          <a
            href="src/components/Hero/resume.pdf"
            download
            className={styles.contactBtn}
          >
            {t("My resume")}
          </a>
        </div>
      </div>

      <img
        src="/portfolio.jpg"
        alt="Ostap Demchuk"
        className={styles.heroImg}
      />
    </section>
  );
};