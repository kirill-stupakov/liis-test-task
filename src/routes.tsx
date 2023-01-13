import Home from 'pages/Home';
import { RouteObject } from 'react-router-dom';
import Login from 'pages/Login';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
