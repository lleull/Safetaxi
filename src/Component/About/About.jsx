import React from "react";
import styles from "./About.module.css";
import phone from "./icons8-phone-50.png"
import location from "./icons8-location-50 (1).png"
import adnroid from "./icons8-android-50 (1).png"
import apple from "./icons8-apple-50.png"
import email from "./icons8-email-50.png"
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
              <h1 className={styles.phonetext}>Android <img className={styles.icon} src={adnroid} alt="s"/></h1>
              <h1 className={styles.phonetext}>IOS  <img className={styles.icon} src={apple} alt="s"/></h1>
            </div>
          </div>
          <div className={styles.card}>
            <h1 className={styles.head}>Contact</h1>

            <div className={styles.phone}>
              <span className={styles.abt}>
                <img  className={styles.icons} src={phone} alt="a" />
                <span className={styles.itext}>+(251)986 662 12</span>
              </span>
              <span className={styles.abt}>
                <img  className={styles.icons} src={email} alt="a" />
                <span className={styles.itext}>safetaxi@gmail.com</span>

              </span>
              <span className={styles.abt}>
                <img  className={styles.icons} src={location} alt="a" />
                <span className={styles.itext}>Ethiopia,Addisabeba , 12th street Bole road</span>

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
