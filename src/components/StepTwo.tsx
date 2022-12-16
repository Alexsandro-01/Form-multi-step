import React from 'react';
import styles from '../styles/Steps.module.css';
import arcadeImage from '../assets/images/icon-arcade.svg';
import advancedImage from '../assets/images/icon-advanced.svg';
import proImage from '../assets/images/icon-pro.svg';

function StepTwo() {
  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Select your plan</h2>
        <p>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div>
        <div className={styles['box-card']}>
          <label htmlFor='arcade' className={styles.card}>
            <div>
              <img src={arcadeImage} alt="arcade plan" />
            </div>
            <div className={styles.info}>
              <input type="radio" name="plan" id="arcade" />
              <p>Arcade</p>
              <span>$9/mo</span>
            </div>
          </label>

          <label htmlFor='advanced' className={styles.card}>
            <div>
              <img src={advancedImage} alt="advaced plan" />
            </div>
            <div className={styles.info}>
              <input type="radio" name="plan" id="advanced" />
              <p>Advanced</p>
              <span>$12/mo</span>
            </div>
          </label>

          <label htmlFor='pro' className={styles.card}>
            <div>
              <img src={proImage} alt="pro plan" />
            </div>
            <div className={styles.info}>
            <input type="radio" name="plan" id="pro" />
              <p>Pro</p>
              <span>$15/mo</span>
            </div>
          </label>
        </div>

        <div className={styles.period}>
          {/* Rounded switch */}
          <p>Monthly</p>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}>
            </span>
          </label>
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;