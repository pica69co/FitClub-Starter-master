import React from "react";
import styles from "../Programs/Programs.module.css";
import { programsData } from "../../data/programsData";
import rigthArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className={styles.programs} id="programs">
      <div className={styles.headerPrograms}>
        <span className="stroke-text">Explore</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/*programs categories*/}
      <div className={styles.programCategories}>
        {programsData.map((program) => (
          <div className={styles.category}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className={styles.joinNow}>Join now
              <span>
                <img src={rigthArrow} alt="arrow" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
