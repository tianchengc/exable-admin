import Header from '@components/header';
import Footer from '@components/footer';
import { Outlet } from 'react-router';
import Menus from '@components/Menu/Menu';

export const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="top-0 left-0 w-full flex-0">
        <Header />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Menus />
        <div className='overflow-x-hidden overflow-y-auto  flex-1 '>
        <Outlet  />
        </div>
      </div>
      <Footer  />
    </div>
  );
};

export default BaseLayout;
