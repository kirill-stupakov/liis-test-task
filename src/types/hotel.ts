export type Hotel = {
  stars: number;
  priceAvg: number;
  hotelName: string;
  hotelId: number;
};

export type SortOrder = 'asc' | 'desc';
export type SortProperty = 'rating' | 'price';
