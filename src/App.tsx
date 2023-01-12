import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './App.scss';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
