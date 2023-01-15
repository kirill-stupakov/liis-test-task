import { createReducer } from '@reduxjs/toolkit';
import { setFilters } from 'redux/actions/filters';
import { Filters } from 'types/filters';

export const filtersState: Filters = {
  location: 'Москва',
  checkIn: new Date().toLocaleDateString('en-CA'),
  checkOut: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('en-CA'),
};

const initializeFilters = () => {
  const params = new URLSearchParams(window.location.search);
  const queryFilters = Object.fromEntries(params);
  if (Object.keys(filtersState).every((key) => key in queryFilters)) {
    return queryFilters as Filters;
  }

  return filtersState;
};

export default createReducer(initializeFilters(), (builder) => {
  builder.addCase(setFilters, (draft, { payload }) => payload);
});
