import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: ["Python", "JavaScript", "React", "HTML", "CSS", "Git Bash"],
      learning: ["Java", "Node.js", "Express.js"],
    },
    {
      title: "Methodologies & Principles",
      skills: [
        "RESTful APIs",
        "Object-Oriented Programming (OOP)",
        "Test-Driven Development (TDD)",
        "Database Design",
        "Agile",
        "Scrum",
        "Waterfall",
      ],
      learning: ["LangChain", "LangGraph", "Continuous skill improvement"],
    },
    {
      title: "Tools & Technologies",
      skills: ["AWS", "Git", "GitHub", "Docker", "Postman"],
      learning: ["MongoDB", "PostgreSQL"],
    },
  ];

  const languages = [
    "English (Fluent)",
    "Ukrainian (Native)",
    "Polish (Fluent)",
    "French (Learning)",
  ];

  const certificates = [
    "AWS Academy Graduate - AWS Cloud Foundations",
    "AWS Academy Cloud Architecting",
    "Google IT Support Professional Certificate",
    "Google Cybersecurity Certificate",
    "Coding for Success by ANC",
    "Advanced Coding for Success by ANC",
  ];

  return (
    <section className={styles.container} id="experience">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Qualifications</span>
        <h2 className={styles.title}>Experience, Education & Skills</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Education</h3>

            <div className={styles.educationItem}>
              <h4>Software Development Diploma</h4>
              <p>Keyin College | 2024 - 2025</p>
            </div>

            <div className={styles.educationItem}>
              <h4>Certificates</h4>
              <ul className={styles.certificateList}>
                {certificates.map((certificate, index) => (
                  <li key={index}>{certificate}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Technical Skills</h3>

            <div className={styles.skillsWrapper}>
              {skillCategories.map((category, index) => (
                <div key={index} className={styles.skillCategory}>
                  <h4>{category.title}</h4>

                  <p className={styles.skillText}>
                    {category.skills.join(", ")}
                  </p>

                  <p className={styles.learningText}>
                    <span>Currently learning:</span> {category.learning.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.rightColumn}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Experience</h3>

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
            <h3 className={styles.cardTitle}>Languages</h3>

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