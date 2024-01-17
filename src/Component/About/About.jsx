import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h1 className={styles.head}>ABOUT SAFETAXI</h1>
            <p className={styles.par}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, itaque. Adipisci quasi, eaque quibusdam expedita
              voluptas quaerat doloribus maxime ducimus aperiam eos. Aspernatur
              autem aliquid quas distinctio fuga laboriosam exercitationem.
            </p>
            <div className={styles.logos}></div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.head}>Download</h1>
            <p className={styles.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={styles.phone}>
              <h1 className={styles.phonetext}>Android</h1>
              <h1 className={styles.phonetext}>IOS</h1>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.head}>Contact</h1>

            <div className={styles.phone}>
              <span className={styles.abt}>
                <img className={styles.img} src="a" alt="a" />
              </span>
              <span className={styles.abt}>
                <img className={styles.img} src="a" alt="a" />
              </span>
              <span className={styles.abt}>
                <img className={styles.img} src="a" alt="a" />
              </span>
              <span className={styles.abt}>
                <img className={styles.img} src="a" alt="a" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.lastp}>Copywright @ 2019 safetaxi@gmail.com</p>
    </div>
  );
};

export default About;
