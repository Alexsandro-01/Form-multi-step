import { Dispatch, SetStateAction } from 'react';

export interface IPersonalInfo {
  name: string,
  email: string,
  phone: string
}

export interface IAppContext {
  personalInfo: IPersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<IPersonalInfo>>
  fieldesValidations: IfieldsValidations,
  setFieldsValidations: Dispatch<SetStateAction<IfieldsValidations>>
}


export interface IfieldsValidations {
  nameError: string,
  emailError: string,
  phoneError: string
}