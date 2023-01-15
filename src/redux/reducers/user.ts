import { createReducer } from '@reduxjs/toolkit';
import {
  initializeUser,
  logIn,
  logInFailure,
  logInSuccess,
  logOut,
  logOutFailure,
  logOutSuccess,
} from 'redux/actions/user';
import { User } from 'types/user';
import createInitialState from 'utils/createInitialState';

export const userState = createInitialState<User>();
userState.isLoading = true;

export default createReducer(userState, (builder) => {
  builder.addCase(initializeUser, (draft, { payload }) => {
    draft.data = payload;
    draft.isLoading = false;
    draft.error = undefined;
  });

  builder
    .addCase(logIn, (draft) => {
      draft.data = undefined;
      draft.isLoading = true;
      draft.error = undefined;
    })
    .addCase(logInSuccess, (draft, { payload }) => {
      draft.data = payload;
      draft.isLoading = false;
      draft.error = undefined;
    })
    .addCase(logInFailure, (draft, { payload }) => {
      draft.data = undefined;
      draft.isLoading = false;
      draft.error = payload;
    });

  builder
    .addCase(logOut, (draft) => {
      draft.isLoading = true;
      draft.error = undefined;
    })
    .addCase(logOutSuccess, (draft) => {
      draft.data = undefined;
      draft.isLoading = false;
      draft.error = undefined;
    })
    .addCase(logOutFailure, (draft, { payload }) => {
      draft.data = undefined;
      draft.isLoading = false;
      draft.error = payload;
    });
});
