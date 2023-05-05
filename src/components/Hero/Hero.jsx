import React from "react";
import styles from "../Hero/Hero.module.css";
import Header from "../Header/Header";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import { motion } from "framer-motion";

const Hero = () => {
  
  const transition = { type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className={styles.hero} id="home">
      
      <div className={`${styles.heroBlur} blur`} ></div>
      
      <div className={styles.leftHero}>
        <Header />
        {/*the best ad */}
        <div className={styles.theBestAd}>
          <motion.div 
            initial={{left: mobile ? '170px' : '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>The best fitness club in the city</span>
        </div>
        {/*HeroHeading */}
        <div className={styles.heroText}>
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est numquam eligendi quasi eum assumenda id consequuntur sed sit
              aliquam?
            </span>
          </div>
        </div>

        {/*figures */}
        <div className={styles.figures}>
          <div>
            {" "}
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay='4'
                preFix='+' />
              </span>
            <span>expert coachs</span>{" "}
          </div>
          <div>
            {" "}
            <span><NumberCounter
                end={978}
                start={880}
                delay='4'
                preFix='+' /></span>
            <span>members joined</span>{" "}
          </div>
          <div>
            {" "}
            <span><NumberCounter
                end={50}
                start={5}
                delay='4'
                preFix='+' /></span>
            <span>fitness programs</span>{" "}
          </div>
        </div>

        {/*hero Buttons */}
        <div className={styles.heroButtons}>
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* right side*/}
      <div className={styles.rightHero}>
        <button className="btn">Join Now</button>
        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className={styles.heartRate}>
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/*hero images*/}
        <img src={heroImage} alt="hero" className={styles.heroImage} />
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={heroImageBack} alt="hero" className={styles.heroImageBack} />
        {/*calories*/}
        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className={styles.calories}>
          <img src={calories} alt="calories" />
          <div> 
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
