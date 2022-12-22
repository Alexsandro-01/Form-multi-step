import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import styles from '../styles/Steps.module.css';

import AppContext from '../context/AppContext';
import { IAdd, IPlan } from '../interfaces/IContext';

function StepFour({ setStep }: {
  setStep: Dispatch<SetStateAction<number>>
}) {
  const ctx = useContext(AppContext);

  const { period, planName } = ctx?.plan as IPlan;
  const addOns = ctx?.add as IAdd;

  type Prices = Record<string, string>;
  const planPrices: Record<string, Prices> = {
    monthly: {
      arcade: '$9/mo',
      advanced: '$12/mo',
      pro: '$15/mo'
    },
    yearly: {
      arcade: '$90/yr',
      advanced: '$120/yr',
      pro: '$150/yr'
    }

  };

  const addPrices: Record<string, Prices> = {
    monthly: {
      'online Service': '$1/mo',
      'large Storage': '$2/mo',
      'customizable Profile': '$2/mo'
    },
    yearly: {
      'online Service': '$10/yr',
      'large Storage': '$20/yr',
      'customizable Profile': '$20/yr'
    }
  };

  function adds() {
    const addOnsList = Object.entries(addOns);

    const userAdds: string[] = [];
    addOnsList.forEach((add) => {
      if (add[1]) {
        userAdds.push(add[0]);
      }
    });

    return userAdds;
  }

  function calcTotal() {
    const planPrice = planPrices[period][planName]
      .replace('/yr', '').replace('$', '').replace('/mo', '');
    
    let total = Number(planPrice);
    adds().forEach((add) => {
      const price = addPrices[period][add]
        .replace('/yr', '').replace('$', '').replace('/mo', '');

      total += Number(price);
    });

    return period === 'yearly' ? `$${total}/yr` : `+$${total}/mo`;    
  }

  useEffect(() => {
    adds();
    calcTotal();
  }, []);

  return (
    <div className={styles.step}>
      <div className={styles['title-box']}>
        <h2>Finishing up</h2>
        <p>
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div>
        <ul>
          <li>
            <div>
              <p>{planName} ({period})</p>
              <small onClick={() => setStep(2)}>Change</small>
            </div>
            <span>{planPrices[period][planName]}</span>
          </li>
          {
            adds().map((value) => (
              <li key={value} className={styles.adds}>
                <small>{value}</small>
                <span>+{addPrices[period][value]}</span>
              </li>
            ))
          }
        </ul>

        <div className={styles.total}>
          <small>
            Total (per {
            period === 'yearly' ? 'year' : 'month'})
          </small>
          <span>
            {calcTotal()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StepFour;