export type SliceBase<T = {}> = {
  data?: T;
  isLoading: boolean;
  error?: string;
};
