import React from "react";
import styles from "./Client.module.css";
import p1 from "./pro.jpg"
import p2 from "./92ec464168ab7ec7ef9bedd0db3087a4.jpg"
const Clients = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.text}>HAPPY CLIENTS</h1>
      <h1 className={styles.texts}>TESTIMONIALS</h1>

      <div className={styles.wrapper}>
        <div className={styles.card1}>
          <h4 className={styles.head}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            cupiditate nostrum. In corrupti nobis dolore. Dolore minima
            incidunt, beatae aliquid quo ratione nostrum porro minus amet rerum?
            Quia, doloremque quasi?
          </h4>

          <div className={styles.profile}>
            <img className={styles.img} src={p1} alt="s" />
            <div className={styles.protext}>
              <h3 className={styles.name}>Hana Girma</h3>
              <h3 className={styles.detail}>Business man</h3>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <h4 className={styles.head}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            cupiditate nostrum. In corrupti nobis dolore. Dolore minima
            incidunt, beatae aliquid quo ratione nostrum porro minus amet rerum?
            Quia, doloremque quasi?
          </h4>

          <div className={styles.profile}>
            <img className={styles.img} src={p2} alt="s" />
            <div className={styles.protext}>
              <h3 className={styles.name}>Haile Gose</h3>
              <h3 className={styles.detail}>Photographer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
