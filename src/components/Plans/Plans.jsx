import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'
import styles from "../Plans/Plans.module.css";

const Plans = () => {
  return (
    <div className={styles.plansContainer} id="plans">

      <div className={`${styles.plansBlur1} blur`}></div>
      <div className={`${styles.plansBlur2} blur`}></div>

      <div className={styles.programsHeader} style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/*plans card*/}
      <div className={styles.plans}>
        {plansData.map((plan, i) => (
          <div className={styles.plan} key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className={styles.features}>
                {plan.features.map((feature, i)=>(
                    <div className={styles.feature}>
                        <img src={whiteTick} alt="whiteTick" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>
            <div><span>See more benefits</span></div>
            <button className='btn'>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
