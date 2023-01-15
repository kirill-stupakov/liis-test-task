import { createReducer } from '@reduxjs/toolkit';
import { fetchHotels, fetchHotelsError, fetchHotelsSuccess } from 'redux/actions/hotels';
import { Hotel } from 'types/hotel';
import createInitialState from 'utils/createInitialState';

export const hotelsState = createInitialState<Hotel[]>();

export default createReducer(hotelsState, (builder) => {
  builder
    .addCase(fetchHotels, (draft) => {
      draft.isLoading = true;
      draft.error = undefined;
    })
    .addCase(fetchHotelsSuccess, (draft, { payload }) => {
      draft.data = payload;
      draft.isLoading = false;
      draft.error = undefined;
    })
    .addCase(fetchHotelsError, (draft, { payload }) => {
      draft.data = undefined;
      draft.isLoading = false;
      draft.error = payload;
    });
});
