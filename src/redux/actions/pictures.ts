import { createAction } from '@reduxjs/toolkit';
import { Picture } from 'types/picture';

export const actionTypes = {
  FETCH_PICTURES: 'FETCH_PICTURES',
  FETCH_PICTURES_SUCCESS: 'FETCH_PICTURES_SUCCESS',
  FETCH_PICTURES_ERROR: 'FETCH_PICTURES_ERROR',
};

export const fetchPictures = createAction(actionTypes.FETCH_PICTURES);
export const fetchPicturesSuccess = createAction(
  actionTypes.FETCH_PICTURES_SUCCESS,
  (payload: Picture[]) => ({
    payload,
  }),
);
export const fetchPicturesError = createAction(
  actionTypes.FETCH_PICTURES_ERROR,
  (payload: string) => ({
    payload,
  }),
);
