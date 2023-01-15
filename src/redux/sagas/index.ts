import { all, fork } from 'redux-saga/effects';
import hotels from './hotels';

export default function* root() {
  yield all([fork(hotels)]);
}
