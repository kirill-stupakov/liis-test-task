import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import { logOut } from 'redux/actions/user';
import { ReactComponent as LogOutIcon } from 'assets/icons/log-out.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Simple Hotel Check</h1>
      <button className={styles.logOutButton} onClick={handleLogOut} disabled={isLoading}>
        Выйти <LogOutIcon />
      </button>
    </header>
  );
};

export default Header;
