import React from 'react'
import styles from './index.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.sec_container}>


            <div className={styles.logo}>
              <img src="/assets/svgs/logo.svg" alt="" />
            </div>

            <div className={styles.logo_container}>
              <img src="/assets/imgs/logo-white.png" alt="" />
            </div>



          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar