import { RouteObject } from 'react-router-dom';
import Login from 'pages/Login';

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
