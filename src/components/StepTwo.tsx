import React, { useContext } from 'react';

import arcadeImage from '../assets/images/icon-arcade.svg';
import advancedImage from '../assets/images/icon-advanced.svg';
import proImage from '../assets/images/icon-pro.svg';

import styles from '../styles/Steps.module.css';
import AppContext from '../context/AppContext';
import { IPlan } from '../interfaces/IContext';

function StepTwo() {
  const ctx = useContext(AppContext);

  const { planName, period } = ctx?.plan as IPlan;
  
  function handlePeriod() {
    ctx?.setPlan({
      ...ctx.plan,
      period: period === 'monthly' ? 'yearly' : 'monthly'
    });
  }

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
          <label htmlFor='arcade' className={
            `
            ${styles.card}
            ${planName === 'arcade' && (styles['card-selected'])}
            `
          }>
            <div>
              <img src={arcadeImage} alt="arcade plan" />
            </div>

            <div className={styles.info}>
              <input
                type="radio"
                name="plan"
                id="arcade"
                checked={planName === 'arcade'}
                onChange={() => ctx?.setPlan({
                  ...ctx.plan,
                  planName: 'arcade'
                })}
              />

              <p>Arcade</p>

              <span>
                {
                  period === 'monthly' ?
                    ('$9/mo') : ('$90/yr')
                }
              </span>

              {
                period === 'yearly' && (
                  <small>2 months free</small>
                )
              }

            </div>
          </label>

          <label htmlFor='advanced' className={
            `
            ${styles.card}
            ${planName === 'advanced' && (styles['card-selected'])}
            `
          }>
            <div>
              <img src={advancedImage} alt="advaced plan" />
            </div>

            <div className={styles.info}>
              <input
                type="radio"
                name="plan"
                id="advanced"
                onChange={() => ctx?.setPlan({
                  ...ctx.plan,
                  planName: 'advanced'
                })}
              />

              <p>Advanced</p>

              <span>
                {
                  period === 'monthly' ?
                    ('$12/mo') : ('$120/yr')
                }
              </span>

              {
                period === 'yearly' && (
                  <small>2 months free</small>
                )
              }

            </div>
          </label>

          <label htmlFor='pro' className={
            `
            ${styles.card}
            ${planName === 'pro' && (styles['card-selected'])}
            `
          }>
            <div>
              <img src={proImage} alt="pro plan" />
            </div>

            <div className={styles.info}>
            <input
              type="radio"
              name="plan"
              id="pro"
              onChange={() => ctx?.setPlan({
                ...ctx.plan,
                planName: 'pro'
              })}
            />

              <p>Pro</p>

              <span>
                {
                  period === 'monthly' ?
                    ('$15/mo') : ('$150/yr')
                }
              </span>

              {
                period === 'yearly' && (
                  <small>2 months free</small>
                )
              }

            </div>
          </label>
        </div>

        <div className={styles.period}>
          <p className={
            period === 'monthly' ?
              (styles['period-selected']) : ''
          }>
            Monthly
          </p>

          {/* Rounded switch */}
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={period === 'yearly'}
              onChange={() => handlePeriod()}
            />

            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>

          <p className={
            period === 'yearly' ?
              (styles['period-selected']) : ''
          }>
            Yearly
          </p>

        </div>
      </div>
    </div>
  );
}

export default StepTwo;