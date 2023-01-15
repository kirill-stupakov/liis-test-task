import { RouteObject } from 'react-router-dom';
import Home, { homePath } from 'pages/Home';
import Login, { loginPath } from 'pages/Login';

const routes: RouteObject[] = [
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: loginPath,
    element: <Login />,
  },
];

export default routes;
