import { useEffect } from 'react';
import Header from 'components/Header';
import useAppDispatch from 'hooks/useAppDispatch';
import Favorites from 'pages/Home/cards/Favorites';
import Results from 'pages/Home/cards/Results';
import { initializeFilters } from 'redux/actions/filters';
import { fetchHotels } from 'redux/actions/hotels';
import SearchOptions from './cards/SearchOptions';
import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeFilters());
    dispatch(fetchHotels());
  }, []);

  return (
    <div className={styles.homePage}>
      <Header />
      <main className={styles.content}>
        <div className={styles.sidePanel}>
          <SearchOptions />
          <Favorites />
        </div>
        <Results />
      </main>
    </div>
  );
};

export default Home;
