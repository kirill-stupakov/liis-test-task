import { isEqual } from 'lodash';
import { FC } from 'react';
import cn from 'classnames';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { addFavorite, removeFavorite } from 'redux/actions/favorites';
import { Hotel } from 'types/hotel';
import { ReactComponent as HouseIcon } from 'assets/icons/house.svg';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import formatDate from 'utils/formatDate';
import formatPrice from 'utils/formatPrice';
import getDaysDiff from 'utils/getDaysDiff';
import styles from './HotelCard.module.scss';

interface Props {
  hasIcon?: boolean;
  className?: string;
  hotel: Hotel;
  checkIn: string;
  checkOut: string;
}

const HotelCard: FC<Props> = ({ hasIcon, hotel, className, checkIn, checkOut }) => {
  const { data: favorites } = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const displayDate = formatDate(checkIn);
  const days = getDaysDiff(checkIn, checkOut);
  const favorite = favorites.find((favorite) => isEqual(favorite, { hotel, checkIn, checkOut }));

  const onChange = () => {
    const newFavorite = { hotel, checkIn, checkOut };
    dispatch(favorite ? removeFavorite(favorite) : addFavorite(newFavorite));
  };

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
              checked={Boolean(favorite)}
              onChange={onChange}
              aria-label={favorite ? 'Убюрать из избранного' : 'Добавить в избранное'}
            />
            <HeartIcon />
          </label>
        </div>
        <div className={styles.period}>
          <time dateTime={checkIn}>{displayDate}</time>
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
