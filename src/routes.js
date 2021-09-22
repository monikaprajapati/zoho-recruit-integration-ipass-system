import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/layouts/DashboardLayout';
import MainLayout from 'src/components/layouts/MainLayout';
import Dashboard from 'src/components/Dashboard/Dashboard';
import Login from 'src/components/Login/Login';
import NotFound from 'src/components/layouts/NotFound';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
