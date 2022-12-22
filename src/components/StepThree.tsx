import React, { useContext } from 'react';
import styles from '../styles/Steps.module.css';
import AppContext from '../context/AppContext';
import { IAdd, IPlan } from '../interfaces/IContext';

const StepThree = () => {
  const ctx = useContext(AppContext);
  const add = ctx?.add as IAdd;
  
  const { period } = ctx?.plan as IPlan;


  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Pick add-ons</h2>
        <p>
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className={styles['box-card-add-ons']}>
        <label htmlFor='service' className={
            `
            ${styles.card}
            ${add['online Service'] && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='service'
                checked={add['online Service']}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    'online Service': !add['online Service']
                  });
                }}
              />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Online service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>

          {
            period === 'monthly' ? (
              <p className={styles.price}>+$1/mo</p>
            ) : (
              <p className={styles.price}>+$10/yr</p>
            )
          }
        </label>

        <label htmlFor='storage' className={
            `
            ${styles.card}
            ${add['large Storage'] && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='storage'
                checked={add['large Storage']}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    'large Storage': !add['large Storage']
                  });
                }}
              />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>

          {
            period === 'monthly' ? (
              <p className={styles.price}>+$2/mo</p>
            ) : (
              <p className={styles.price}>+$20/yr</p>
            )
          }
        </label>

        <label htmlFor='profile' className={
            `
            ${styles.card}
            ${add['customizable Profile'] && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='profile'
                checked={add['customizable Profile']}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    'customizable Profile': !add['customizable Profile']
                  });
                }}
              />
              <span className={styles['check-service']}></span>
            </div>
            <div className={styles.info}>
              <p>Customizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          {
            period === 'monthly' ? (
              <p className={styles.price}>+$2/mo</p>
            ) : (
              <p className={styles.price}>+$20/yr</p>
            )
          }
        </label>
      </div>
    </div>
  );
};

export default StepThree;