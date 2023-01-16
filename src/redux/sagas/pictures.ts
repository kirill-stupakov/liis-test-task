import { AxiosError } from 'axios';
import { put, takeLatest, delay } from 'redux-saga/effects';
import image1 from 'assets/images/mock-1.jpg';
import image2 from 'assets/images/mock-2.jpg';
import image3 from 'assets/images/mock-3.jpg';
import image4 from 'assets/images/mock-4.jpg';
import { actionTypes, fetchPicturesError, fetchPicturesSuccess } from 'redux/actions/pictures';
import { Picture } from 'types/picture';

const response: Picture[] = [
  {
    src: image1,
    alt: '',
  },
  {
    src: image2,
    alt: '',
  },
  {
    src: image3,
    alt: '',
  },
  {
    src: image4,
    alt: '',
  },
];

export function* picturesSaga(): any {
  try {
    yield delay(400);
    yield put(fetchPicturesSuccess(response));
  } catch (error) {
    yield put(fetchPicturesError((error as AxiosError).message));
  }
}

export default function* root() {
  yield takeLatest(actionTypes.FETCH_PICTURES, picturesSaga);
}
