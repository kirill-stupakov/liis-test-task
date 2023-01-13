import { ReactComponent as LogOutIcon } from 'assets/icons/log-out.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Simple Hotel Check</h1>
      <button className={styles.logOutButton}>
        Выйти <LogOutIcon />
      </button>
    </header>
  );
};

export default Header;
