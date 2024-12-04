import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router';
import { Menus } from '../components/menu';

export const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header className="top-0 left-0 w-full flex-0"/>
      <div className="flex flex-1 overflow-hidden">
        <Menus className="max-w-xs w-full" />
        <Outlet className="flex-1 h-100 overflow-auto" />
      </div>
      <Footer className="bottom-0 left-0 w-full flex-0" />
    </div>
  );
};

export default BaseLayout;
