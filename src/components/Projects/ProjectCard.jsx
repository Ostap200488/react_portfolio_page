import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
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

      <p className={styles.description}>{description}</p>

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
            Demo
          </a>
        )}

        <a
          href={source}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};