import React from "react";
import styles from "./Nav.module.css";
import { useState } from "react";
import close from "./icon-close.svg"
import logo from "./icons8-menu-bar-50.png"
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles.title}>
          <h1 className={styles.head}>
            Safe <span className={styles.headtaxi}>Taxi</span>
          </h1>
          <p className={styles.parg}>Calm and Relax</p>
        </div>

        <ul className={styles.unorder}>
          <li className={styles.list}>Home</li>
          <li className={styles.list}>About</li>
          <li className={styles.list}>Features</li>
          <li className={styles.list}>Blog</li>
          <li className={styles.list}>Order now</li>
          <li className={styles.list}>Contact</li>
        </ul>
      </div>
      <img
        className={styles.hamburger}
        onClick={() => settoggle(true)}
        src={logo}
        alt="sd"
      />
      {toggle ? (
        <div className={toggle ? styles.toggle : styles.toggles}>
          <div className={styles.mobilemenu}>
            <div className={styles.menulogo}>
              <img onClick={() => settoggle(false)} src={close} alt="ds" />
            </div>
            <div className={styles.toggletext}>
              <h6 className={styles.totext}>Home</h6>
              <h6 className={styles.totext}>About</h6>
              <h6 className={styles.totext}>Features</h6>
              <h6 className={styles.totext}>Blog</h6>
              <h6 className={styles.totext}>Order now</h6>
              <h6 className={styles.totext}>Contact</h6>
            </div>
            
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
