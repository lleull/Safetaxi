import React from "react";
import styles from "./Why.module.css";
const Whyus = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.head}>WE DO BEST</h1>
      <h1 className={styles.heads}>THAN YOU WISH</h1>

      <div className={styles.wrapper}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.logo}></div>
            <div className={styles.texts}>
              <p className={styles.title}>Home pickup</p>
              <p className={styles.paras}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum atque illum doloribus ratione enim sunt nihil
                voluptatem, hic eum beatae debitis rem. Blanditiis omnis
                architecto cum nulla atque modi nisi.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}></div>
            <div className={styles.texts}>
              <p className={styles.title}>Fast Booking</p>
              <p className={styles.paras}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                totam eaque iusto corporis sit sequi dicta voluptate veritatis
                excepturi delectus! Voluptate unde eum amet perspiciatis
                molestiae non placeat possimus dolor.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.logo}></div>
            <div className={styles.texts}>
              <p className={styles.title}>Bonus for ride</p>
              <p className={styles.paras}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam ipsum eius harum facilis explicabo rerum amet adipisci
                totam id earum, maiores soluta, vero ut odit distinctio
                recusandae beatae corporis pariatur!
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.logo}></div>
            <div className={styles.texts}>
              <p className={styles.title}>Gps searching</p>
              <p className={styles.paras}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
                consequuntur debitis sit quis nihil earum perspiciatis culpa
                sapiente aliquid dolor saepe quibusdam vero quasi! Minima dicta
                aliquam esse fuga libero.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.read}>Read More</button>
    </div>
  );
};

export default Whyus;
