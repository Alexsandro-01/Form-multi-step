import React from 'react';
import styles from '../styles/Steps.module.css';

function StepOne() {
  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Personal info</h2>
        <p>
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div>
        <div className='input-box'>
          <label htmlFor="name">Name</label>
          <input
            type='text'
            id='name'
            required
            placeholder='e.g. Stephen King'
          />
        </div>

        <div className='input-box'>
          <label htmlFor="email">Email Address</label>
          <input
            type='email'
            id='email'
            required
            placeholder='e.g. stephenking@lorem.com'
          />
        </div>

        <div className='input-box'>
          <label htmlFor="phone">Phone Number</label>
          <input
            type='text'
            id='phone'
            required
            placeholder='e.g. (00) 0 0000-0000'
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;