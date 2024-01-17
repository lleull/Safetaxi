import React from "react";
import styles from "./Down.module.css";
import ig from "./aps.png"
import igs from "./google-play-badge.png"
import dow from "./cars.png"
const Download = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.head}>Download</h1>
      <h2 className={styles.text}>BEST CAB SERVICE</h2>

      <div className={styles.wrapper}>
        <div className={styles.abt}>
          <h3 className={styles.downtext}>
            Download The SafeTaxi App Here! Get Exciting New Offers
          </h3>
          <p className={styles.downtexts}>
            {" "}
            our application can be found for free from playstore and appstore,
            Download it now and be share your moment with us
          </p>
          <div className={styles.imgs}>
            <img className={styles.imag} src={ig} alt="s"/>
            <img className={styles.imag} src={igs} alt="s"/>
            
                      </div>
        </div>
        <div className={styles.image}>
          <img src={dow} alt="a" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Download;
