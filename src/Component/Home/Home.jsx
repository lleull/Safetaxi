import React from "react";
import styles from "./Home.module.css";
import cab from "./Screenshot__53_-removebg-preview.png"
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.texts}>
        <h2 className={styles.bookcab}>book cab now</h2>
        <h1 className={styles.num}>+(251)9 4567 9800</h1>
        <span className={styles.webtext}>www.safetaxi.com</span>
      </div>

      <div className={styles.image}>
        <img className={styles.img} src={cab} alt="a" />
      </div>
    </div>
  );
};

export default Home;
