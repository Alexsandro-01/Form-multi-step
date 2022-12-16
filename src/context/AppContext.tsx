import { createContext, Dispatch, SetStateAction } from 'react';

export interface IAppContext {
  stepNumber: number;
  setStepNumber: Dispatch<SetStateAction<number>>
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export default AppContext;