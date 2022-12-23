import React from 'react';
import styles from '../styles/Sidebar.module.css';

function Sidebar({ step }: { step: number }) {
  return (
    <section className={styles.sidebar}>
      <div>
        <span
          className={
            step === 1 ?
              (styles['selected-step']) : ''
          }
        >
          1
        </span>

        <div className={styles.text_step}>
          <small>STEP 1</small>
          <p>YOUR INFO</p>
        </div>
      </div>

      <div>
        <span
          className={
            step === 2 ?
              (styles['selected-step']) : ''
          }
        >
          2
        </span>

        <div className={styles.text_step}>
          <small>STEP 2</small>
          <p>SELECT PLAN</p>
        </div>
      </div>

      <div>
        <span
          className={
            step === 3 ?
              (styles['selected-step']) : ''
          }
        >
          3
        </span>

        <div className={styles.text_step}>
          <small>STEP 3</small>
          <p>ADD-ONS</p>
        </div>
      </div>

      <div>
        <span
          className={
            step === 4 || step === 5 ?
              (styles['selected-step']) : ''
          }
        >
          4
        </span>
        
        <div className={styles.text_step}>
          <small>STEP 4</small>
          <p>SUMMARY</p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;