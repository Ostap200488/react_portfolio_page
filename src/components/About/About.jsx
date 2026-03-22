import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
                My name is Ostap, and I am originally from Ukraine. Three years ago, I moved to Mount Pearl, Canada. Before that, I lived in Poland from 2019 to 2022.
                I am a friendly and outgoing person who enjoys meeting new people and continuously learning and improving. I am easy-going, open to new opportunities, and always ready to take on new challenges.
                I have a strong competitive spirit that motivates me to push my limits and achieve both personal and professional goals. I am hardworking and constantly looking for ways to improve my skills and grow as a person.
                I am also passionate and creative, always seeking new ways to express myself and bring ideas to life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal values</h3>
              <p>
                 I am a hardworking and dedicated person who always strives to complete tasks to the highest standard. I consistently deliver high-quality work and take pride in doing my best in everything I do.
                  I am creative, curious, and open-minded, with a strong desire to continuously learn and grow. I enjoy exploring new ideas and improving my skills.
                  I am also a friendly and approachable person who values building positive relationships with colleagues and clients. My supportive and caring nature allows me to contribute to a positive team environment and help others whenever possible.
                  Honesty and humility are at the core of my character, guiding my decisions and helping me build strong and trustworthy relationships. I believe that versatility and continuous learning are key to personal and professional growth.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Education & Experience</h3>
              <p>
                Since my childhood , i always had a interest about computers and technology .
                 So since my school time i always  choosed an advanced computer science classes and when i came to Canada i always parcitipated and finished courses about computer science and programming . I have a strong background in computer science and programming, with experience in various programming languages and technologies. I have completed several courses and projects that have helped me develop my skills and knowledge in the field. I am always eager to learn more and stay up-to-date with the latest trends and advancements in technology.
                 And when i arrived to Canada i started and graduated from colleпge with a software development diploma. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
