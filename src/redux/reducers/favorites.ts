import { createReducer } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import { addFavorite, removeFavorite } from 'redux/actions/favorites';
import { Favorite } from 'types/favorite';

type FavoriteState = {
  data: Favorite[];
};

export const favoritesState: FavoriteState = {
  data: [],
};

export default createReducer(favoritesState, (builder) => {
  builder.addCase(addFavorite, (draft, { payload }) => {
    draft.data.push(payload);
  });
  builder.addCase(removeFavorite, (draft, { payload }) => {
    draft.data = draft.data.filter((favorite) => !isEqual(favorite, payload));
  });
});
