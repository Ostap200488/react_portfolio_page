import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("experience.skillCategory1"),
      skills: t("experience.skillCategory1Skills"),
      learning: t("experience.skillCategory1Learning"),
    },
    {
      title: t("experience.skillCategory2"),
      skills: t("experience.skillCategory2Skills"),
      learning: t("experience.skillCategory2Learning"),
    },
    {
      title: t("experience.skillCategory3"),
      skills: t("experience.skillCategory3Skills"),
      learning: t("experience.skillCategory3Learning"),
    },
  ];

  const languages = [
    t("experience.language1"),
    t("experience.language2"),
    t("experience.language3"),
    t("experience.language4"),
  ];

  const certificates = [
    t("experience.certificate1"),
    t("experience.certificate2"),
    t("experience.certificate3"),
    t("experience.certificate4"),
    t("experience.certificate5"),
    t("experience.certificate6"),
  ];

  return (
    <section className={styles.container} id="experience">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>{t("experience.label")}</span>
        <h2 className={styles.title}>{t("experience.title")}</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{t("experience.education")}</h3>

            <div className={styles.educationItem}>
              <h4>{t("experience.diploma")}</h4>
              <p>Keyin College | 2024 - 2025</p>
            </div>

            <div className={styles.educationItem}>
              <h4>{t("experience.certificates")}</h4>
              <ul className={styles.certificateList}>
                {certificates.map((certificate, index) => (
                  <li key={index}>{certificate}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{t("experience.technicalSkills")}</h3>

            <div className={styles.skillsWrapper}>
              {skillCategories.map((category, index) => (
                <div key={index} className={styles.skillCategory}>
                  <h4>{category.title}</h4>

                  <p className={styles.skillText}>{category.skills}</p>

                  <p className={styles.learningText}>
                    <span>{t("experience.currentlyLearning")}:</span> {category.learning}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.rightColumn}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{t("experience.workExperience")}</h3>

            <ul className={styles.history}>
              {history.map((item, id) => (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyHeader}>
                    <div>
                      <h4 className={styles.roleTitle}>
                        {item.role}, {item.organisation}
                      </h4>
                      <p className={styles.date}>
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                  </div>

                  {item.description && (
                    <p className={styles.description}>{item.description}</p>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className={styles.techStack}>
                      {item.technologies.map((tech, index) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className={styles.experienceList}>
                    {item.experiences.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>{t("experience.languages")}</h3>

            <div className={styles.tagGroup}>
              {languages.map((language, index) => (
                <span key={index} className={styles.extraTag}>
                  {language}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};