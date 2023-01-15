import cn from 'classnames';
import HotelCard from 'components/HotelCard';
import useAppSelector from 'hooks/useAppSelector';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';
import Carousel from 'components/Carousel';
import formatDate from 'utils/formatDate';
import styles from './Results.module.scss';

const Results = () => {
  const {
    filters: { location, checkIn, checkOut },
    hotels: { data: hotels, isLoading },
    favorites: { data: favorites },
  } = useAppSelector((state) => state);
  const displayDate = formatDate(checkIn);

  return (
    <Card className={styles.results}>
      <div className={styles.top}>
        <Breadcrumbs items={['Отели', location]} />
        <time dateTime={checkIn}>{displayDate}</time>
      </div>
      <Carousel />
      <p className={styles.favoritesCount}>
        Добавленно в Избранное: <span>{favorites.length}</span> отеля
      </p>
      <ul className={cn(styles.hotels, isLoading && styles.loading)}>
        {hotels?.length || isLoading ? (
          hotels?.map((hotel) => (
            <HotelCard
              className={styles.hotelCard}
              key={hotel.hotelId}
              hotel={hotel}
              hasIcon
              checkIn={checkIn}
              checkOut={checkOut}
            />
          ))
        ) : (
          <p className={styles.nothingFound}>Ничего не найдено</p>
        )}
      </ul>
    </Card>
  );
};

export default Results;
