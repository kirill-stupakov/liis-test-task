import { createAction } from '@reduxjs/toolkit';
import { Favorite } from 'types/favorite';

export const actionTypes = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

export const addFavorite = createAction(actionTypes.ADD_FAVORITE, (payload: Favorite) => ({
  payload,
}));
export const removeFavorite = createAction(actionTypes.REMOVE_FAVORITE, (payload: Favorite) => ({
  payload,
}));
