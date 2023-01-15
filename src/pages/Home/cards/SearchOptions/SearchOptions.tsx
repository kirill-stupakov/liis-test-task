import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import Button from 'components/Button';
import Card from 'components/Card';
import TextField from 'components/TextField';
import { setFilters } from 'redux/actions/filters';
import { fetchHotels } from 'redux/actions/hotels';
import addDays from 'utils/addDays';
import getDaysDiff from 'utils/getDaysDiff';
import styles from './SearchOptions.module.scss';

type Inputs = {
  location: string;
  checkIn: string;
  days: number;
};

const SearchOptions = () => {
  const dispatch = useAppDispatch();
  const {
    hotels: { isLoading },
    filters: { location, checkIn, checkOut },
  } = useAppSelector((state) => state);
  const [, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      location,
      checkIn,
      days: getDaysDiff(checkIn, checkOut),
    },
  });

  const onSubmit = handleSubmit((values) => {
    const newFilters = {
      location: values.location,
      checkIn: values.checkIn,
      checkOut: addDays(values.checkIn, values.days),
    };

    dispatch(setFilters(newFilters));
    setSearchParams(newFilters);
    dispatch(fetchHotels());
  });

  return (
    <Card className={styles.searchOptions}>
      <form onSubmit={onSubmit}>
        <div className={styles.inputs}>
          <TextField
            label='Локация'
            boldLabel
            {...register('location', {
              required: 'Обязательное поле',
            })}
            error={errors.location?.message}
          />
          <TextField
            label='Дата заселения'
            boldLabel
            type='date'
            {...register('checkIn', {
              required: 'Обязательное поле',
            })}
            error={errors.checkIn?.message}
          />
          <TextField
            label='Количество дней'
            boldLabel
            type='number'
            {...register('days', {
              required: 'Обязательное поле',
            })}
            error={errors.days?.message}
          />
        </div>
        <Button type='submit' disabled={isLoading}>
          Найти
        </Button>
      </form>
    </Card>
  );
};

export default SearchOptions;
