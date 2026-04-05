import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>{t("about.label")}</span>
          <h2 className={styles.title}>{t("about.title")}</h2>
          <p className={styles.subtitle}>{t("")}</p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardNumber}>01</span>
              <h3 className={styles.cardTitle}>{t("about.backgroundTitle")}</h3>
            </div>
            <p className={styles.cardText}>{t("about.backgroundText")}</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardNumber}>02</span>
              <h3 className={styles.cardTitle}>{t("about.valuesTitle")}</h3>
            </div>
            <p className={styles.cardText}>{t("about.valuesText")}</p>
          </article>

          <article className={`${styles.card} ${styles.fullWidth}`}>
            <div className={styles.cardTop}>
              <span className={styles.cardNumber}>03</span>
              <h3 className={styles.cardTitle}>{t("about.hobbiesTitle")}</h3>
            </div>
            <p className={styles.cardText}>{t("about.hobbiesText")}</p>
          </article>
        </div>
      </div>
    </section>
  );
};