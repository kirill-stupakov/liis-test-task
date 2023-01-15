import { createReducer } from '@reduxjs/toolkit';
import { setFilters } from 'redux/actions/filters';
import { Filters } from 'types/filters';

export const filtersState: Filters = {
  location: 'Москва',
  checkIn: new Date().toLocaleDateString('en-CA'),
  checkOut: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('en-CA'),
};

export default createReducer(filtersState, (builder) => {
  builder.addCase(setFilters, (draft, { payload }) => payload);
});
