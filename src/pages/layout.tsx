import Header from '../components/header/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router';
import { Menus } from '../components/menu';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Menus />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
