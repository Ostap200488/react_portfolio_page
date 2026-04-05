import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectCard.module.css";

import chatappImg from "../../../assets/projects/chatapp.png";
import posImg from "../../../assets/projects/pos.png";
import ecommerceImg from "../../../assets/projects/ecommerce.png";
import medchatImg from "../../../assets/projects/medchat.png";
import todoImg from "../../../assets/projects/todo.png";
import libImg from "../../../assets/projects/lib.png";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  const { t, i18n } = useTranslation();

  const getProjectImage = (title) => {
    switch (title) {
      case "ChatApp":
        return chatappImg;
      case "POS":
        return posImg;
      case "E-Commerce":
        return ecommerceImg;
      case "Medical ChatBot":
        return medchatImg;
      case "React Todo List":
        return todoImg;
      case "Library Management System":
        return libImg;
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

        {source && (
          <a
            href={source}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.source")}
          </a>
        )}
      </div>
    </div>
  );
};