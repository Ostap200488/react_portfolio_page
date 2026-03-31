import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  const { t, i18n } = useTranslation();

  const getProjectImage = (title) => {
    switch (title) {
      case "ChatApp":
        return "/assets/projects/chatapp.png";
      case "POS":
        return "/assets/projects/pos.png";
      case "E-Commerce":
        return "/assets/projects/ecommerce.png";
      case "Medical ChatBot":
        return "/assets/projects/medchat.png";
      case "React Todo List":
        return "/assets/projects/todo.png";
      case "Library Management System":
        return "/assets/projects/lib.png";
      default:
        return null;
    }
  };

  const getTranslatedDescription = (title, fallback) => {
    if (i18n.language === "fr") {
      switch (title) {
        case "ChatApp":
          return t("projects.chatappDesc");
        case "POS":
          return t("projects.posDesc");
        case "E-Commerce":
          return t("projects.ecommerceDesc");
        case "Medical ChatBot":
          return t("projects.medicalDesc");
        case "React Todo List":
          return t("projects.todoDesc");
        case "Library Management System":
          return t("projects.libraryDesc");
        default:
          return fallback;
      }
    }
    return fallback;
  };

  const image = getProjectImage(title);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className={styles.image}
        />
      )}

      <p className={styles.description}>
        {getTranslatedDescription(title, description)}
      </p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.demo")}
          </a>
        )}

        <a
          href={source}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("projects.source")}
        </a>
      </div>
    </div>
  );
};