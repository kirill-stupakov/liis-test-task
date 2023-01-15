import Card from 'components/Card';
import HotelCard from 'components/HotelCard';
import SortToggle from 'components/SortToggle';
import useAppSelector from 'hooks/useAppSelector';
import { FC, useState } from 'react';
import { SortOrder, SortProperty } from 'types/hotel';
import styles from './Favorites.module.scss';

interface Props {}

const Favorites: FC<Props> = () => {
  const { data: favorites } = useAppSelector((state) => state.favorites);
  const [order, setOrder] = useState<SortOrder>('asc');
  const [property, setProperty] = useState<SortProperty | undefined>(undefined);

  const sortedFavorites = property
    ? [...favorites].sort((a, b) => {
        const priceDiff = a.hotel.priceAvg - b.hotel.priceAvg;
        const ratingDiff = a.hotel.stars - b.hotel.stars;
        const diff = property === 'price' ? priceDiff : ratingDiff;
        return order === 'asc' ? diff : -diff;
      })
    : favorites;

  return (
    <Card className={styles.favorites}>
      <h1>Избранное</h1>
      <div className={styles.sort}>
        <SortToggle
          label='Рейтинг'
          order={order}
          selected={property === 'rating'}
          onChange={() => {
            setProperty('rating');
            setOrder(order === 'asc' ? 'desc' : 'asc');
          }}
        />
        <SortToggle
          label='Цена'
          order={order}
          selected={property === 'price'}
          onChange={() => {
            setProperty('price');
            setOrder(order === 'asc' ? 'desc' : 'asc');
          }}
        />
      </div>
      <ul className={styles.list}>
        {sortedFavorites.length ? (
          sortedFavorites.map((favorite) => (
            <HotelCard
              hotel={favorite.hotel}
              checkIn={favorite.checkIn}
              checkOut={favorite.checkOut}
              key={favorite.hotel.hotelId}
            />
          ))
        ) : (
          <p className={styles.noFavorites}>Нет избранных</p>
        )}
      </ul>
    </Card>
  );
};

export default Favorites;
