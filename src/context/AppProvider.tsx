import React, { PropsWithChildren, useState } from 'react';
import AppContext from './AppContext';
import { IAppContext } from '../interfaces/IContext';

function AppProvider(props: PropsWithChildren<unknown>) {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [fieldesValidations, setFieldsValidations] = useState({
    nameError: '',
    emailError: '',
    phoneError: ''
  });

  const [plan, setPlan] = useState({
    planName: 'arcade',
    period: 'monthly'
  });

  const [add, setAdd] = useState({
    'online Service': false,
    'large Storage': false,
    'customizable Profile': false
  });

  const contex: IAppContext = {
    add,
    plan,
    personalInfo,
    fieldesValidations,
    setAdd,
    setPlan,
    setPersonalInfo,
    setFieldsValidations
  };

  return <AppContext.Provider value={contex}  {...props} />;
}

export default AppProvider;