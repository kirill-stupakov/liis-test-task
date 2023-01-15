import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes, setFilters } from 'redux/actions/filters';
import { filtersState } from 'redux/reducers/filters';
import { Filters } from 'types/filters';

export function* filtersSaga(): any {
  const params = new URLSearchParams(window.location.search);
  const queryFilters = Object.fromEntries(params);
  if (Object.keys(filtersState).every((key) => key in queryFilters)) {
    return yield put(setFilters(queryFilters as Filters));
  }
}

export default function* root() {
  yield takeLatest(actionTypes.INITIALIZE_FILTERS, filtersSaga);
}
