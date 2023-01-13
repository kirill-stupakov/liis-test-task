import Card from 'components/Card';
import HotelCard from 'components/HotelCard';
import SortToggle from 'components/SortToggle';
import hotels from 'hotels';
import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SortOrder, SortProperty } from 'types/hotel';
import styles from './Favorites.module.scss';

interface Props {}

const Favorites: FC<Props> = () => {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState<SortOrder>('asc');
  const [property, setProperty] = useState<SortProperty | undefined>(undefined);

  const days = Number(searchParams.get('days')) || 1;
  const date = searchParams.get('date') || '';
  const sortedFavorites = hotels.sort((a, b) => {
    const priceDiff = a.priceAvg - b.priceAvg;
    const ratingDiff = a.stars - b.stars;
    const diff = property === 'price' ? priceDiff : ratingDiff;
    return order === 'asc' ? diff : -diff;
  });

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
        {sortedFavorites.map((hotel) => (
          <HotelCard hotel={hotel} date={date} days={days} key={hotel.hotelId} />
        ))}
      </ul>
    </Card>
  );
};

export default Favorites;
