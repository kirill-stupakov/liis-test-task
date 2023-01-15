import { createAction } from '@reduxjs/toolkit';
import { LoginFormInputs } from 'pages/Login/Login';
import { User } from 'types/user';

export const actionTypes = {
  INITIALIZE_USER: 'INITIALIZE_USER',
  SET_USER: 'SET_USER',
  LOG_IN: 'LOG_IN',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_FAILURE: 'LOG_IN_FAILURE',
  LOG_OUT: 'LOG_OUT',
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_FAILURE: 'LOG_OUT_FAILURE',
};

export const initializeUser = createAction(actionTypes.INITIALIZE_USER);

export const logIn = createAction(actionTypes.LOG_IN, (payload: LoginFormInputs) => ({ payload }));
export const logInSuccess = createAction(actionTypes.LOG_IN_SUCCESS, (payload: User) => ({
  payload,
}));
export const logInFailure = createAction(actionTypes.LOG_IN_FAILURE, (payload: string) => ({
  payload,
}));
export const logOut = createAction(actionTypes.LOG_OUT);
export const logOutSuccess = createAction(actionTypes.LOG_OUT_SUCCESS);
export const logOutFailure = createAction(actionTypes.LOG_OUT_FAILURE, (payload: string) => ({
  payload,
}));
