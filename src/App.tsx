import React from 'react';
import styles from './styles/App.module.css';
import StepOne from './components/StepOne';
import Sidebar from './components/Sidebar';
import Boxbuttons from './components/Boxbuttons';

function App() {
  return (
    <main>
      <section className={styles.container}>
        <Sidebar />

        <form>
          <StepOne />

          <Boxbuttons />
        </form>
      </section>
    </main>
  );
}

export default App;
