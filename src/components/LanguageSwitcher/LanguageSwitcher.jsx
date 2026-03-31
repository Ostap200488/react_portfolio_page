import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`${styles.btn} ${i18n.language === "en" ? styles.active : ""}`}
      >
        {t("language.english")}
      </button>

      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`${styles.btn} ${i18n.language === "fr" ? styles.active : ""}`}
      >
        {t("language.french")}
      </button>
    </div>
  );
};