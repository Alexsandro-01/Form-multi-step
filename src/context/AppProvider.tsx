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

  const contex: IAppContext = {
    personalInfo,
    fieldesValidations,
    setPersonalInfo,
    setFieldsValidations
  };

  return <AppContext.Provider value={contex}  {...props} />;
}

export default AppProvider;