import React, { PropsWithChildren, useState } from 'react';
import AppContext from './AppContext';
import { IAppContext } from './AppContext';

function AppProvider(props: PropsWithChildren<unknown>) {
  const [stepNumber, setStepNumber] = useState(1);

  const contex: IAppContext = {
    stepNumber,
    setStepNumber
  };

  return <AppContext.Provider value={contex}  {...props} />;
}

export default AppProvider;