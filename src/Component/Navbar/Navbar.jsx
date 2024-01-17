import React from 'react'
import styles from "./Nav.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.nav}>
            <div className={styles.title}>
                <h1 className={styles.head}>Safe <span className={styles.headtaxi}>Taxi</span></h1>
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

    </div>
  )
}

export default Navbar