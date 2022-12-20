import React, { useContext } from 'react';
import styles from '../styles/Steps.module.css';
import AppContext from '../context/AppContext';
import { IAdd, IPlan } from '../interfaces/IContext';

const StepThree = () => {
  const ctx = useContext(AppContext);
  const { 
    onlineService,
    largeStorage,
    customizableProfile } = ctx?.add as IAdd;
  
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
            ${onlineService && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='service'
                checked={onlineService}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    onlineService: !onlineService
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
            ${largeStorage && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='storage'
                checked={largeStorage}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    largeStorage: !largeStorage
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
            ${customizableProfile && (styles['card-selected'])}
            `
          }>
          <div className={styles.content}>
            <div>
              <input
                type="checkbox"
                id='profile'
                checked={customizableProfile}
                onChange={() => {
                  ctx?.setAdd({
                    ...ctx.add,
                    customizableProfile: !customizableProfile
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