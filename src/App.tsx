import React, { useContext, useState } from 'react';
import Boxbuttons from './components/Boxbuttons';
import Sidebar from './components/Sidebar';
import StepOne from './components/StepOne';
import StepThree from './components/StepThree';
import StepTwo from './components/StepTwo';

import styles from './styles/App.module.css';

import AppContext from './context/AppContext';
import { IPersonalInfo } from './interfaces/IContext';

function App() {
  const [step, setStep] = useState<number>(1);
  const ctx = useContext(AppContext);

  const steps: Record<number, JSX.Element> = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />
  };

  function validations(value: number) {
    const { name, email, phone } = ctx?.personalInfo as IPersonalInfo;

    const phoneNumber = phone.replace(' ', '').replace('(', '').replace(')', '');
    const validEmail = /\S+@\S+\.\S+/;

    if (!name) {
      ctx?.setFieldsValidations({
        ...ctx.fieldesValidations,
        nameError: 'This field is required'
      });
    } else if (!email) {
      ctx?.setFieldsValidations({
        ...ctx.fieldesValidations,
        nameError: '',
        emailError: 'This field is required'
      });
    } else if (!validEmail.test(email)) {
      ctx?.setFieldsValidations({
        ...ctx.fieldesValidations,
        nameError: '',
        emailError: 'Invalid email adress'
      });
    } else if (!phoneNumber) {
      ctx?.setFieldsValidations({
        nameError: '',
        emailError: '',
        phoneError: 'This field is required'
      });
    } else if (phoneNumber.length < 11) {
      ctx?.setFieldsValidations({
        nameError: '',
        emailError: '',
        phoneError: 'Invalid phone number'
      });
    } else {
      ctx?.setFieldsValidations({
        nameError: '',
        emailError: '',
        phoneError: ''
      });
      setStep(value);
    }
  }

  function handleStep(value: number, e: React.FormEvent | undefined) {
    e?.preventDefault();

    if (!steps[value]) return;

    validations(value);
  }
  return (
  <main>
    <section className={styles.container}>
      <Sidebar />

      <form onSubmit={(e) => handleStep(step + 1, e)}>
        {
          steps[step]
        }

        <Boxbuttons
          step={step}
          handleStep={handleStep}
        />
      </form>
    </section>
  </main>
  );
}

export default App;
