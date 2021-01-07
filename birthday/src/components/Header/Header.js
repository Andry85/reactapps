import React from 'react';
import styles from './Header.module.scss';

import logo from './img/logo.png';



function Header() {


  return (
    <div className={styles.header}>
      
      <a href="#"className={styles.logo}>
        <img src={logo} alt=""/>
      </a>

    </div>
  );
}

export default Header;
