import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import styles from './Menu.module.css';
import classNames from 'classnames';

const userInfo = {
  avatar: 'src/assets/participants.svg',
  username: 'John Doe',
  date: '2024-11-30',
};

const menuList = [
  { name: 'Schedule', url: '/schedule', icon: <CalendarOutlined /> },
  { name: 'Participants', url: '/participants', icon: <UserOutlined /> },
  // { name: 'Resources', url: '/resources', icon: <CalendarOutlined /> },
  { name: 'Reports', url: '/reports', icon: <CalendarOutlined /> },
  {
    name: 'Exercise Library',
    url: '/exercises',
    icon: <CalendarOutlined />,
  },
];

export const Menus = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(getSelected());

  const handleClick = (key: string) => {
    setSelectedKey(key);
    navigate(key);
  };

  const dom = true ? (
    <div className={styles.menuContainer}>
      <div className="w-full flex justify-center items-center flex-col mt-10 mb-5">
        <img
          src={userInfo.avatar}
          alt="User Avatar"
          className={styles.avatarImage}
        />

        <p className="m-0 text-center text-sm text-white">
          {userInfo.username}
        </p>
        <p className="m-0 text-center text-sm text-white">{userInfo.date}</p>
      </div>
      <div className={styles.menu}>
        {menuList.map((item, index) => (
          <div
            key={index}
            className={classNames(styles.menuItem, {
              [styles.active]: selectedKey === item.url,
            })}
            onClick={() => handleClick(item.url)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  return dom;
};

function getSelected() {
  const url = location.pathname;
  try {
    return menuList.filter(i => url.includes(i.url))[0].url;
  } catch {
    return '/course';
  }
}

export default Menus;