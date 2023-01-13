import HotelCard from 'components/HotelCard';
import hotels from 'hotels';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';
import Carousel from 'components/Carousel';
import formatDate from 'utils/formatDate';
import styles from './Results.module.scss';

const favoritesCount = 3;

const Results = () => {
  const [searchParams] = useSearchParams();
  const days = Number(searchParams.get('days')) || 1;
  const date = searchParams.get('date') || '';
  const displayDate = formatDate(date);
  const location = searchParams.get('location') || '';

  return (
    <Card className={styles.results}>
      <div className={styles.top}>
        <Breadcrumbs items={['Отели', location]} />
        <time dateTime={date}>{displayDate}</time>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавленно в Избранное: <span>{favoritesCount}</span> отеля
      </p>
      <ul className={styles.hotels}>
        {hotels.map((hotel) => (
          <HotelCard
            className={styles.hotelCard}
            key={hotel.hotelId}
            hotel={hotel}
            hasIcon
            date={date}
            days={days}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Results;
