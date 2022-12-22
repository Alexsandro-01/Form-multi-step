import React from 'react';
import styles from '../styles/Steps.module.css';
import img from '../assets/images/icon-thank-you.svg';

const Finish = () => {
  return (
    <div className={
      `
      ${styles.step}
      ${styles.finish}
      `
    }>
      <div className={
        `
        ${styles['title-box']}
        `
        }>
        <img src={img} alt="a check image" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Finish;