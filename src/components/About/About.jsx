import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me </h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Background</h3>
              <p>
                My name is Ostap, and I am originally from Ukraine. Three years
                ago, I moved to Mount Pearl, Canada. Before that, I lived in
                Poland from 2019 to 2022. I am a friendly and outgoing person
                who enjoys meeting new people, learning continuously, and
                improving myself. I am easygoing, open to new opportunities, and
                always ready to take on new challenges. I have a strong
                competitive spirit that motivates me to push my limits and
                achieve both personal and professional goals. I am hardworking
                and always looking for ways to improve my skills and grow as a
                person. I am also passionate and creative, always seeking new
                ways to express myself and bring ideas to life.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
          
            <div className={styles.aboutItemText}>
              <h3>Personal Values</h3>
              <p>
                I am a hardworking and dedicated person who always strives to
                complete tasks to the highest standard. I consistently deliver
                high-quality work and take pride in doing my best in everything
                I do. I am creative, curious, and open-minded, with a strong
                desire to continuously learn and grow. I enjoy exploring new
                ideas and improving my skills. I am also a friendly and
                approachable person who values building positive relationships
                with colleagues and clients. My supportive and caring nature
                allows me to contribute to a positive team environment and help
                others whenever possible. Honesty and humility are at the core
                of my character, guiding my decisions and helping me build
                strong and trustworthy relationships. I believe that versatility
                and continuous learning are key to personal and professional
                growth.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hobbies and Volunteering</h3>
              <p>
                In my free time, I enjoy participating in various events, such
                as hackathons. During my last hackathon, I worked in a group of
                three people and helped create a local event radar for the city
                where I currently live. I also participated in a local
                entrepreneurship hackathon, where I worked with five other team
                members to create a list of problems faced by newcomers and new
                businesses, along with possible solutions. I am also a big fan
                of Formula 1 and have a strong interest in history. Back in
                Ukraine, I participated in history Olympiads and won trophies at
                the national level.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};