import React from 'react';
import styles from '../styles/Boxbutton.module.css';
import { IButtons } from '../interfaces/IButtons';

function Boxbuttons({ step, handleStep }: IButtons) {

  return (
    <div className={styles.container}>
      <div>
        {
          step > 1 && (
            <button
              type='button'
              className={styles.go_back}
              onClick={
                () => handleStep(step - 1, undefined)
              }
            >
              Go Back
            </button>
          )
        }
      </div>

      <button
        className={
          `
          ${styles.next_step}
          ${step === 4 ? styles.confirm : ''}
          `
        }
        type='submit'
      >
        {
          step === 4 ? 'Confirm' : 'Next Step'
        }
      </button>
    </div>
  );
}

export default Boxbuttons;