import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import Button from 'components/Button';
import Card from 'components/Card';
import TextField from 'components/TextField';
import styles from './SearchOptions.module.scss';

type Inputs = {
  location: string;
  date: string;
  days: number;
};

const defaultValues: Inputs = {
  location: 'Москва',
  date: new Date().toLocaleDateString('en-CA'),
  days: 1,
};

const SearchOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { ...defaultValues, ...Object.fromEntries(searchParams) },
  });

  const onSubmit = handleSubmit((values) => {
    // @ts-ignore
    setSearchParams(new URLSearchParams(values));
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
            {...register('date', {
              required: 'Обязательное поле',
            })}
            error={errors.date?.message}
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
        <Button type='submit'>Найти</Button>
      </form>
    </Card>
  );
};

export default SearchOptions;
