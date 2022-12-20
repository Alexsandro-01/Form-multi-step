import { Dispatch, SetStateAction } from 'react';

export interface IPersonalInfo {
  name: string,
  email: string,
  phone: string
}

export interface IPlan {
  planName: string,
  period: string
}

export interface IAdd {
  onlineService: boolean,
  largeStorage: boolean,
  customizableProfile: boolean
}

export interface IAppContext {
  personalInfo: IPersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<IPersonalInfo>>
  fieldesValidations: IfieldsValidations,
  setFieldsValidations: Dispatch<SetStateAction<IfieldsValidations>>
  plan: IPlan,
  setPlan : Dispatch<SetStateAction<IPlan>>
  add: IAdd,
  setAdd: Dispatch<SetStateAction<IAdd>>
}


export interface IfieldsValidations {
  nameError: string,
  emailError: string,
  phoneError: string
}