import { createAction } from '@reduxjs/toolkit';
import { Filters } from 'types/filters';

export const actionTypes = {
  SET_FILTERS: 'SET_FILTERS',
  INITIALIZE_FILTERS: 'INITIALIZE_FILTERS',
};

export const setFilters = createAction(actionTypes.SET_FILTERS, (payload: Filters) => ({
  payload,
}));
export const initializeFilters = createAction(actionTypes.INITIALIZE_FILTERS);
