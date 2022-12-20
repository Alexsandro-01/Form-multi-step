import React, { useContext } from 'react';
import appContext from '../context/AppContext';
import { IfieldsValidations, IPersonalInfo } from '../interfaces/IContext';
import styles from '../styles/Steps.module.css';

function StepOne() {
  const ctx = useContext(appContext);

  const { 
    name, email, phone
  } = ctx?.personalInfo as IPersonalInfo;

  const { 
    nameError, emailError, phoneError 
  } = ctx?.fieldesValidations as IfieldsValidations;

  function maskPhone(value: string) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');


    ctx?.setPersonalInfo({
      ...ctx.personalInfo,
      phone: value
    });
  }
  
  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Personal info</h2>
        <p>
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div>
        <div className={styles['input-box']}>
          <p>
            <label htmlFor="name">Name</label>
            <span>{nameError && (nameError)}</span>
          </p>
          <input
            type='text'
            id='name'
            name='name'
            value={ name }
            placeholder='e.g. Stephen King'
            autoComplete="off"
            className={
              `
              ${styles['input-box-input']}
              ${nameError && (styles.invalid)}
              `
            }
            onChange={
              ({ target }) => ctx?.setPersonalInfo({
                ...ctx.personalInfo,
                name: target.value
              })
            }
            />
        </div>

        <div className={styles['input-box']}>
          <p>
            <label htmlFor="email">Email Address</label>
            <span>{emailError && (emailError)}</span>
          </p>
          <input
            type='email'
            id='email'
            value={ email }
            autoComplete='off'
            placeholder='e.g. stephenking@lorem.com'
            className={
              `
              ${styles['input-box-input']}
              ${emailError && (styles.invalid)}
              `
            }
            onChange={
              ({ target }) => ctx?.setPersonalInfo({
                ...ctx.personalInfo,
                email: target.value
              })
            }
          />
        </div>

        <div className={styles['input-box']}>
          <p>
            <label htmlFor="phone">Phone Number</label>
            <span>{phoneError && (phoneError)}</span>
          </p>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={ phone }
            autoComplete="off"
            placeholder='e.g. (00) 00000-0000'
            className={
              `
              ${styles['input-box-input']}
              ${phoneError && (styles.invalid)}
              `
            }
            onChange={
              ({ target }) => {
                maskPhone(target.value);
              }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;