import React from 'react';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
      <p className= {styles.heading}>Build a <span>Resume</span> that let's you stand!</p>
      <p className= {styles.heading}>Make your own Resume <span>It's free</span></p>
    </div>
  );

}

export default Header;
