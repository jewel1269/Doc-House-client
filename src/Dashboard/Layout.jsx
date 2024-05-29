import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Nav from './Nav';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Dashboard />
    </div>
  );
};

export default Layout;
