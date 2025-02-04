import { observer } from 'mobx-react';
import { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

const userInfo = {
  avatar: 'https://via.placeholder.com/60x60/000000/ffffff?text=U',
  username: 'John Doe',
  date: '2024-11-30',
};

const adminItems = [
  { name: 'Schedule', url: '/schedule', icon: <CalendarOutlined /> },
  { name: 'Participants', url: '/participants', icon: <UserOutlined /> },
  { name: 'Resources', url: '/resources', icon: <CalendarOutlined /> },
  { name: 'Reports', url: '/reports', icon: <CalendarOutlined /> },
  {
    name: 'Exercise Library',
    url: '/exercises',
    icon: <CalendarOutlined />,
  },
];

export const Menus = observer(() => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(getSelected());

  const handleClick = (key: string) => {
    setSelectedKey(key);
    navigate(key);
  };

  const dom = true ? (
    <div className="sidebar-container">
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <div className="user-avatar-image">
          <img
            src={userInfo.avatar}
            alt="User Avatar"
            className="user-avatar_c"
          />
        </div>
        <p className="m-0 text-center text-sm text-white">
          {userInfo.username}
        </p>
        <p className="m-0 text-center text-sm text-white">{userInfo.date}</p>
      </div>

      <Menu
        className="sidebar-menu text-white"
        selectedKeys={[selectedKey]}
        theme="light"
      >
        {adminItems.map(element => (
          <Menu.Item
            key={element.url}
            icon={element.icon}
            className={`sidebar-menu-item ${
              selectedKey === element.url ? 'active' : ''
            }`}
            onClick={() => handleClick(element.url)}
          >
            {element.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  ) : null;

  return dom;
});

function getSelected() {
  const url = location.pathname;
  try {
    return adminItems.filter(i => url.includes(i.url))[0].url;
  } catch {
    return '/course';
  }
}
