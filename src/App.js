import React from "react";
import styles from "./App.module.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Bookcap from "./Component/Book/Bookcap";
import Whyus from "./Component/Whyus/Whyus";
import Download from "./Component/Download/Download";
import About from "./Component/About/About";
import Clients from "./Component/Clients/Clients";
import Ad from "./Component/Ad/Ad";
const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.first}>
        <Navbar />
        <Home />
      </div>
      <div className={styles.second}>
        <Bookcap />
      </div>
      <div className={styles.fourth}>
        <div className={styles.fourthblack}></div>
        <Whyus />
      </div>
      <div className={styles.fifth}>
        <Download/>
      </div>
      <div className={styles.six}>
      <div className={styles.fourthblacks}></div>

        <Clients/>
      </div>
      <div className={styles.seven}>
        <Ad/>
      </div>
      <div className={styles.eight}>
      <div className={styles.fourthblackss}></div>
        <About/>
      </div>
    </div>
  );
};

export default App;
