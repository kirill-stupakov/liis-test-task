import { loginPath } from 'pages/Login/Login';
import { useLayoutEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelector';
import Header from 'components/Header';
import useAppDispatch from 'hooks/useAppDispatch';
import Favorites from 'pages/Home/cards/Favorites';
import Results from 'pages/Home/cards/Results';
import { initializeFilters } from 'redux/actions/filters';
import { fetchHotels } from 'redux/actions/hotels';
import { fetchPictures } from 'redux/actions/pictures';
import SearchOptions from './cards/SearchOptions';
import styles from './Home.module.scss';

export const homePath = '/';

const Home = () => {
  const dispatch = useAppDispatch();
  const { data: user, isLoading } = useAppSelector((state) => state.user);

  useLayoutEffect(() => {
    dispatch(initializeFilters());
    dispatch(fetchHotels());
    dispatch(fetchPictures());
  }, []);

  if (!user && !isLoading) {
    return <Navigate to={loginPath} />;
  }

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
