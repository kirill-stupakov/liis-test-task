import { SliceBase } from 'types/sliceBase';

const createInitialState = <T = {}>(initialData?: T): SliceBase<T> => ({
  data: initialData,
  isLoading: false,
  error: undefined,
});

export default createInitialState;
