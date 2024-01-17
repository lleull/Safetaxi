import React from "react";
import styles from "./Book.module.css";
const Bookcap = () => {
  return (
    <div className={styles.section}>
      <div className={styles.divtext}>
        <h3 className={styles.text}>Best in city</h3>
        <h3 className={styles.texts}>Trusted cab service in Addis abeba</h3>
        <h4 className={styles.paras}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
          dolorem aspernatur molestiae animi ex nobis recusandae quas, adipisci,
          natus officiis quasi. Dolores enim temporibus, earum voluptate
          consequatur nisi laborum voluptatem?
        </h4>
        <button className={styles.read}>Read More</button>
      </div>
      <div className={styles.wrap}>
      <p className={styles.catext}> Book A <span className={styles.cab}>Taxi</span> </p>

        <div className={styles.table}>
            <form className={styles.forms}>
                <div className={styles.one}>

                <input type="text" placeholder="Name"/ >
                <input type="text" placeholder="Phone"/ >
                </div>
                <div className={styles.one}>

                <input type="text" placeholder="When"/ >
                <input type="text" placeholder="Time"/ >
                </div>
                <div className={styles.one}>

                <input type="text" placeholder="Start"/ >
                <input type="text" placeholder="End"/ >
                </div>
                <input className={styles.choose} type="text" placeholder="Choose Car"/>
                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Bookcap;
