import { AxiosError } from 'axios';
import { put, takeLatest, all, delay } from 'redux-saga/effects';
import {
  actionTypes,
  logIn,
  logInFailure,
  logInSuccess,
  logOutFailure,
  logOutSuccess,
} from 'redux/actions/user';

const USER_STORAGE_KEY = 'user';

export function* initializeUserSaga(): any {
  const user = localStorage.getItem(USER_STORAGE_KEY);
  if (user) {
    return yield put(logInSuccess(JSON.parse(user)));
  }
}

export function* logInSaga({ payload }: ReturnType<typeof logIn>): any {
  try {
    yield delay(400);
    const response = { email: payload.login };
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response));
    yield put(logInSuccess(response));
  } catch (error) {
    yield put(logInFailure((error as AxiosError).message));
  }
}

export function* logOutSaga(): any {
  try {
    yield delay(400);
    localStorage.removeItem(USER_STORAGE_KEY);
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailure((error as AxiosError).message));
  }
}

export default function* root() {
  yield all([
    takeLatest(actionTypes.INITIALIZE_USER, initializeUserSaga),
    takeLatest(actionTypes.LOG_IN, logInSaga),
    takeLatest(actionTypes.LOG_OUT, logOutSaga),
  ]);
}
