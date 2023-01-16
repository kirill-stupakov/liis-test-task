import { createReducer } from '@reduxjs/toolkit';
import { fetchPictures, fetchPicturesError, fetchPicturesSuccess } from 'redux/actions/pictures';
import { Picture } from 'types/picture';
import createInitialState from 'utils/createInitialState';

export const picturesState = createInitialState<Picture[]>();

export default createReducer(picturesState, (builder) => {
  builder
    .addCase(fetchPictures, (draft) => {
      draft.isLoading = true;
      draft.error = undefined;
    })
    .addCase(fetchPicturesSuccess, (draft, { payload }) => {
      draft.data = payload;
      draft.isLoading = false;
      draft.error = undefined;
    })
    .addCase(fetchPicturesError, (draft, { payload }) => {
      draft.data = undefined;
      draft.isLoading = false;
      draft.error = payload;
    });
});
