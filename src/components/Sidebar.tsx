import React from 'react';
import styles from '../styles/Sidebar.module.css';

function Sidebar() {
  return (
    <section className={styles.sidebar}>
          <div>
            <span>1</span>
            <div>
              <small>STEP 1</small>
              <p>YOUR INFO</p>
            </div>
          </div>
          <div>
            <span>2</span>
            <div>
              <small>STEP 2</small>
              <p>SELECT PLAN</p>
            </div>
          </div>
          <div>
            <span>3</span>
            <div>
              <small>STEP 3</small>
              <p>ADD-ONS</p>
            </div>
          </div>
          <div>
            <span>4</span>
            <div>
              <small>STEP 4</small>
              <p>SUMMARY</p>
            </div>
          </div>
        </section>
  );
}

export default Sidebar;