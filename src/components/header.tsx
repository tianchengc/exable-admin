import { observer } from 'mobx-react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router';

const Header = observer(() => {
    // const userStore = useContext(UserStore); //FIXME: uncomment once login is implemented
    const userStore = { loggedIn: true };

    const menuItems = [
        { label: 'Dashboard', key: '/' },
        { label: 'Our Programs', key: '/course' },
        { label: 'My Account', key: '/account' }
    ];

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center items-center bg-white shadow-md z-50" style={{ height: '128px', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
            {userStore.loggedIn ? (
                <div className="flex justify-between items-center w-full px-5">
                    <div onClick={() => navigate('/')} className="cursor-pointer">
                        <img src={logo} alt="Logo" className="flex-none" />
                    </div>
                    <Menu 
                      mode="horizontal" 
                      items={menuItems} 
                      className="border-b-0" 
                      selectedKeys={[window.location.pathname]}
                      onClick={(item) => {
                        navigate(item.key);
                      }}
                    />
                    <div className="flex items-center">
                        <MailOutlined className="text-current text-2xl mx-2 primary-icon" />
                        <button className="primary-button">Logout</button>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div onClick={() => navigate('/')} className="cursor-pointer">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            )}
        </div>
    );
});

export default Header;
