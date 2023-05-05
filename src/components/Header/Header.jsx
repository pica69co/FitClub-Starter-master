import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "../Header/Header.module.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  const click = ()=>setMenu(false)
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" classNme={styles.logo} />
      {!menu && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.56rem",
            borderRadius: "5px",
          }}
        onClick={()=>setMenu(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className={styles.headerMenu}>
          
          <li><Link
          onClick={click}
          to='home'
          span={true}
          smooth={true}
          >Home</Link></li>
          
          <li><Link
          onClick={click}
          to='programs'
          span={true}
          smooth={true}
          >Programs</Link></li>
          
          <li><Link
          onClick={click}
          to='reasons'
          span={true}
          smooth={true}
          >Why us</Link></li>
          
          <li><Link
          onClick={click}
          to='plans'
          span={true}
          smooth={true}
          >Plans</Link></li>
          
          <li>
            <Link
           onClick={click}
           to='testimonials'
           span={true}
           smooth={true} 
          >Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
