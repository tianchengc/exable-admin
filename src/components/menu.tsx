import { observer } from 'mobx-react';
import { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

const userInfo = {
    avatar: 'https://via.placeholder.com/60x60/000000/ffffff?text=U',
    username: 'John Doe',
    date: '2024-11-30'
};

const adminItems = [
    { name: 'Schedule', url: '/schedule', icon: <CalendarOutlined /> },
    { name: 'Participants', url: '/participants', icon: <UserOutlined /> },
    { name: 'Resources', url: '/resources', icon: <CalendarOutlined /> },
    { name: 'Reports', url: '/reports', icon: <CalendarOutlined /> },
    { name: 'Exercise Library', url: '/exercise-library', icon: <CalendarOutlined /> }
];

export const Menus = observer(() => {
    const navigate = useNavigate();
    const [selectedKey, setSelectedKey] = useState(getSelected());

    const dom = true ? (
        <div className="sidebar-container">
            <div className="user-info">
                <img src={userInfo.avatar} alt="User Avatar" className="user-avatar" />
                <div className="user-details">
                    <p className="username">{userInfo.username}</p>
                    <p className="date">{userInfo.date}</p>
                </div>
            </div>

            <Menu onSelect={onMenuItemClicked} selectedKeys={[selectedKey]} theme="light" style={{ width: '20em' }}>
                {adminItems.map((element) => (
                    <Menu.Item key={element.url} icon={element.icon}>{element.name}</Menu.Item>
                ))}
            </Menu>
        </div>
    ) : null;

    return dom;

    function onMenuItemClicked(item: IMenuOnSelectArgs) {
        setSelectedKey(item.key);
        navigate(item.key);
    }
});

interface IMenuOnSelectArgs {
    item: any;
    key: string;
    selectedKeys: string[];
}

function getSelected() {
    const url = location.pathname;
    try {
        return adminItems.filter(i => url.includes(i.url))[0].url;
    } catch {
        return '/course';
    }
}
