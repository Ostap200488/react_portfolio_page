import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Ostap Demchuk
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#experience">{t("navbar.experience")}</a>
          </li>
          <li>
            <a href="#projects">{t("navbar.projects")}</a>
          </li>
          <li>
            <a href="#contact">{t("navbar.contact")}</a>
          </li>
          <li className={styles.langItem}>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>

      <div className={styles.langDesktop}>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};