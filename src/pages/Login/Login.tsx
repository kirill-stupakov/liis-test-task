import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import Button from 'components/Button';
import Card from 'components/Card';
import TextField from 'components/TextField';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { homePath } from 'pages/Home';
import { logIn } from 'redux/actions/user';
import isEmail from 'validator/lib/isEmail';
import styles from './Login.module.scss';

export type LoginFormInputs = {
  login: string;
  password: string;
};

const defaultValues: LoginFormInputs = {
  login: '',
  password: '',
};

export const loginPath = '/login';

const Login = () => {
  const dispatch = useAppDispatch();
  const { data: user, isLoading, error } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>({ defaultValues });

  useEffect(() => {
    if (error) {
      setError('login', { type: 'custom', message: error });
      setError('password', { type: 'custom', message: error });
    }
  }, [error]);

  if (user) {
    return <Navigate to={homePath} />;
  }

  const onSubmit = handleSubmit((values) => {
    dispatch(logIn(values));
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
          <Button type='submit' disabled={isLoading}>
            Войти
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
