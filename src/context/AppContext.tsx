import { createContext } from 'react';
import { IAppContext } from '../interfaces/IContext';

const AppContext = createContext<IAppContext | undefined>(undefined);

export default AppContext;