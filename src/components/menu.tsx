import { observer } from 'mobx-react';
import { useState } from 'react';
// import UserStore from '../stores/UserStore'
import '../styles/common-style.css';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';

const adminItems = [
  { name: 'Course Manage', url: '/course' },
  { name: 'Kin Audition', url: '/audit' },
  { name: 'K&P Relationship', url: '/kin' },
  { name: 'Admin Manage', url: '/admin' },
  { name: 'Resource Manage', url: '/resource' },
  { name: 'Knowledge Manage', url: '/knowledge' },
  { name: 'News Manage', url: '/news' },
  { name: 'Participants', url: '/participants' },
  // { name: '直播设置', url: 'live' },
  // // { name: '公告设置', url: 'post' },
  // { name: '视频管理', url: 'video' },
  // // { name: '录像管理', url: 'record' },
  // { name: '标签管理', url: 'tags' },
  // { name: '统计分析', url: 'stats' },
];

export const Menus = observer(() => {
  // const userStore = useContext(UserStore)
  // const location = useLocation();
  const navigate = useNavigate();

  const userStore = { loggedIn: true };

  // useEffect(() => {
  //     if (location.pathname !== '/login' && !userStore.loggedIn) {
  //         navigate('/login')
  //     } else if (location.pathname === '/') {
  //         navigate('/course')
  //     }
  // }, [userStore.loggedIn])

  const [selectedKey, setSelectedKey] = useState(getSelected());

  const dom = userStore.loggedIn ? (
    <Menu
      onSelect={onMenuItemClicked}
      selectedKeys={[selectedKey]}
      theme="dark"
      style={{ width: '20em' }}
    >
      {adminItems.map(element => {
        return <Menu.Item key={element.url}>{element.name}</Menu.Item>;
      })}
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  ) : null;
  return dom;

  function onMenuItemClicked(item: IMenuOnSelectArgs) {
    // TODO: Implement Logout
    // if (item.key === 'logout') {
    //     if (global.confirm('Sure Logout?')) {
    //         userStore.clearToken()
    //         global.location.reload()
    //     }
    //     return
    // }

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
