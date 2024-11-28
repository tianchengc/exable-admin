import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import UserStore from '../../stores/UserStore';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './header.scss'; 
import logo from '../../assets/logo.svg';

const Header = observer(() => {
    // const userStore = useContext(UserStore); //FIXME: uncomment once login is implemented
    const userStore = { loggedIn: true };

    const menuItems = [
        { key: '1', label: 'Dashboard' },
        { key: '2', label: 'Our Programs' },
        { key: '3', label: 'My Account' }
    ];

    return (
        <div className="header">
            {userStore.loggedIn ? (
                <div className="header-content">
                    <img src={logo} alt="Logo" className="logo" />
                    <Menu mode="horizontal" items={menuItems} />
                    <div className="user-actions">
                        <MailOutlined className="mail-button" />
                        <button className="secondary-button">Logout</button>
                    </div>
                </div>
            ) : (
                <div className="center-logo">
                    <img src={logo} alt="Logo" />
                </div>
            )}
        </div>
    );
});

export default Header;
