import { createAction } from '@reduxjs/toolkit';
import { Hotel } from 'types/hotel';

export const actionTypes = {
  FETCH_HOTELS: 'FETCH_HOTELS',
  FETCH_HOTELS_SUCCESS: 'FETCH_HOTELS_SUCCESS',
  FETCH_HOTELS_ERROR: 'FETCH_HOTELS_ERROR',
};

export const fetchHotels = createAction(actionTypes.FETCH_HOTELS);
export const fetchHotelsSuccess = createAction(
  actionTypes.FETCH_HOTELS_SUCCESS,
  (payload: Hotel[]) => ({
    payload,
  }),
);
export const fetchHotelsError = createAction(actionTypes.FETCH_HOTELS_ERROR, (payload: string) => ({
  payload,
}));
