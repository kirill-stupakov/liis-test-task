import { all, fork } from 'redux-saga/effects';
import hotels from './hotels';
import pictures from './pictures';
import filters from './filters';
import user from './user';

export default function* root() {
  yield all([fork(hotels), fork(pictures), fork(filters), fork(user)]);
}
