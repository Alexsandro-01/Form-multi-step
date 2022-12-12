import React from 'react';
import styles from '../styles/Boxbutton.module.css';

function Boxbuttons() {
  return (
    <div className={styles.container}>
      <button
        className={styles.go_back}
        >
        Go Back
      </button>
      <button
        className={styles.next_step}
      >
        Next Step
      </button>
    </div>
  );
}

export default Boxbuttons;