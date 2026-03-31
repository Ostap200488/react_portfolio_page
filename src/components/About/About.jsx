import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.container}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>{t("about.label")}</span>
        <h2 className={styles.title}>{t("about.title")}</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.block}>
          <h3>{t("about.backgroundTitle")}</h3>
          <p>{t("about.backgroundText")}</p>
        </div>

        <div className={styles.block}>
          <h3>{t("about.valuesTitle")}</h3>
          <p>{t("about.valuesText")}</p>
        </div>

        <div className={styles.block}>
          <h3>{t("about.hobbiesTitle")}</h3>
          <p>{t("about.hobbiesText")}</p>
        </div>
      </div>
    </section>
  );
};