import Header from 'components/Header';
import Favorites from 'pages/Home/cards/Favorites';
import Results from 'pages/Home/cards/Results';
import SearchOptions from './cards/SearchOptions';
import styles from './Home.module.scss';

const Home = () => {
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
