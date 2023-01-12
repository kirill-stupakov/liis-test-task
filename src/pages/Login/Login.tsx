import Button from 'components/Button';
import Card from 'components/Card';
import TextField from 'components/TextField';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import styles from './Login.module.scss';

type Inputs = {
  login: string;
  password: string;
};

const defaultValues: Inputs = {
  login: '',
  password: '',
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  const onSubmit = handleSubmit((values) => {
    console.log('submit', values);
  });

  return (
    <div className={styles.loginPage}>
      <Card className={styles.card}>
        <h1>Simple Hotel Check</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.inputs}>
            <TextField
              className={styles.input}
              label='Логин'
              type='email'
              {...register('login', {
                required: 'Обязательное поле',
                validate: (value) => isEmail(value) || 'Неверный формат',
              })}
              error={errors.login?.message}
            />
            <TextField
              className={styles.input}
              label='Пароль'
              type='password'
              {...register('password', {
                required: 'Обязательное поле',
                validate: (value) => !/[а-яА-Я]/.test(value) || 'Неверный формат',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов',
                },
              })}
              error={errors.password?.message}
            />
          </div>
          <Button type='submit'>Войти</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
