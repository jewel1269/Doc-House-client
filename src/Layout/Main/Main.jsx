import { Outlet } from 'react-router-dom';
import Navbar from '../../CommonAllPage/Navbar/Navbar';
import Footer from '../../CommonAllPage/Footer/Footer';
import Banner from '../../HomePgae/Banner/Banner';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
