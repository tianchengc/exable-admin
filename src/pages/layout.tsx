import { Outlet } from 'react-router';
import Header from '../components/header/header';
import { Menus } from '../components/menu';
import Footer from '../components/footer';

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
