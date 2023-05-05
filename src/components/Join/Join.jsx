import React, { useRef } from "react";
import styles from "../Join/Join.module.css";
import emailjs from '@emailjs/browser'
//* https://www.emailjs.com/docs/examples/reactjs/
const { YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,YOUR_PUBLIC_KEY } = process.env 

const Join = () => {
    const form = useRef()

    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current,
            YOUR_PUBLIC_KEY)
        .then((result)=>{
            console.log(result.text)
        }, (error)=>{console.log(error.text)})    
    }

  return (
    <div className={styles.join} id="joinUs">
      <div className={styles.leftJ}>
        <hr/>
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className={styles.rightJ}>
        <form 
            ref={form}
            onSubmit={sendEmail}
            className={styles.emailContainer}>
            <input 
                type="email" 
                name="user_email" 
                id="" 
                placeholder="Enter your Email address" 
            />
            <button className={styles.btnJoin}>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
