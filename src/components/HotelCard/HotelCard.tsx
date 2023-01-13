import { FC } from 'react';
import cn from 'classnames';
import { Hotel } from 'types/hotel';
import { ReactComponent as HouseIcon } from 'assets/icons/house.svg';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import formatDate from 'utils/formatDate';
import formatPrice from 'utils/formatPrice';
import styles from './HotelCard.module.scss';

interface Props {
  hasIcon?: boolean;
  className?: string;
  hotel: Hotel;
  date: string;
  days: number;
  isFavorite?: boolean;
}

const HotelCard: FC<Props> = ({ hasIcon, hotel, className, date, days, isFavorite }) => {
  const displayDate = formatDate(date);

  return (
    <li className={cn(className, styles.hotelCard)}>
      {hasIcon && (
        <div className={styles.iconWrapper}>
          <HouseIcon />
        </div>
      )}
      <div className={styles.data}>
        <div className={styles.top}>
          <h2>{hotel.hotelName}</h2>
          <label className={styles.heart}>
            <input
              type='checkbox'
              checked={isFavorite}
              aria-label={isFavorite ? 'Убюрать из избранного' : 'Добавить в избранное'}
            />
            <HeartIcon />
          </label>
        </div>
        <div className={styles.period}>
          <time dateTime={date}>{displayDate}</time>
          <span className={styles.separator}>--</span>
          <span>{days} день</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.rating} title={`${hotel.stars} из 5 звезд`}>
            {[...new Array(5)].map((_, index) => (
              <StarIcon className={cn(index <= hotel.stars && styles.fill)} key={index} />
            ))}
          </div>
          <p className={styles.price}>
            Цена: <span>{formatPrice(hotel.priceAvg)}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HotelCard;
