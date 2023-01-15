import { useLayoutEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useAppDispatch from 'hooks/useAppDispatch';
import { initializeUser } from 'redux/actions/user';
import routes from './routes';

const router = createBrowserRouter(routes);

const App = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(initializeUser());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
