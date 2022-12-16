import React, { useState } from 'react';
import Boxbuttons from './components/Boxbuttons';
import Sidebar from './components/Sidebar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

import styles from './styles/App.module.css';

function App() {
  const [step, setStep] = useState<number>(1);

  const steps: Record<number, JSX.Element> = {
    1: <StepOne />,
    2: <StepTwo />
  };

  function handleStep(value: number, e: React.FormEvent | undefined) {
    e?.preventDefault();

    if (!steps[value]) return;

    setStep(value);
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
