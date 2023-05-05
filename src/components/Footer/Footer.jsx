import React from "react";
import styles from "../Footer/Footer.module.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.footer}>
        <div className={styles.socialLinks}>  
        <img src={Github} alt="git" srcset="" />
        <img src={Instagram} alt="insta" srcset="" />
        <img src={Linkedin} alt="linkedin" srcset="" />
        </div>
      
      <div className={styles.logo}>
        <img src={Logo} alt="" />
        </div>
      </div>
      <div className={`blur ${styles.blurF1} `}></div>
      <div className={`${styles.blurF2} blur`}></div>
    </div>
  );
};

export default Footer;
