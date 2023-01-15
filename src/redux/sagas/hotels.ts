import { AxiosError } from 'axios';
import { put, takeLatest, select, call } from 'redux-saga/effects';
import { actionTypes, fetchHotelsError, fetchHotelsSuccess } from 'redux/actions/hotels';
import { Hotel } from 'types/hotel';
import { hotelsEndpoint } from 'utils/env';
import http from 'utils/http';

const additionalFilters = {
  currency: 'rub',
  limit: 25,
};

export function* hotelsSaga(): any {
  try {
    const filters = yield select((state) => state.filters);
    const hotels = yield call(() =>
      http.get<Hotel[]>(hotelsEndpoint, {
        params: { ...additionalFilters, ...filters },
      }),
    );
    yield put(fetchHotelsSuccess(hotels.data));
  } catch (error) {
    yield put(fetchHotelsError((error as AxiosError).message));
  }
}

export default function* root() {
  yield takeLatest(actionTypes.FETCH_HOTELS, hotelsSaga);
}
