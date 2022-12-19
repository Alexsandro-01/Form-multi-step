import React from 'react';
import styles from '../styles/Steps.module.css';

const StepThree = () => {
  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Pick add-ons</h2>
        <p>
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className={styles['box-card-add-ons']}>
        <label htmlFor='service' className={styles.card}>
          <div className={styles.content}>
            <div>
              <input type="checkbox" id='service' />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Online service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>

          <p>+$1/mo</p>
        </label>

        <label htmlFor='storage' className={styles.card}>
          <div className={styles.content}>
            <div>
              <input type="checkbox" id='storage' />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>

          <p>+$2/mo</p>
        </label>

        <label htmlFor='profile' className={styles.card}>
          <div className={styles.content}>
            <div>
              <input type="checkbox" id='profile' />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Customizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <p>+$2/mo</p>
        </label>
      </div>
    </div>
  );
};

export default StepThree;