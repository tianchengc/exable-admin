import { observer } from 'mobx-react'
import { useContext, useEffect, useState } from 'react'
import UserStore from '../stores/UserStore'
import '../common-style.scss'
import history from '../stores/history'
import { Menu } from 'antd'

const adminItems = [
    { name: 'Course Manage', url: '/course' },
    { name: 'Kin Audition', url: '/audit' },
    { name: 'K&P Relationship', url: '/kin' },
    { name: 'Admin Manage', url: '/admin' },
    { name: 'Resource Manage', url: '/resource' },
    { name: 'Knowledge Manage', url: '/knowledge' },
    { name: 'News Manage', url: '/news' },
    // { name: '直播设置', url: 'live' },
    // // { name: '公告设置', url: 'post' },
    // { name: '视频管理', url: 'video' },
    // // { name: '录像管理', url: 'record' },
    // { name: '标签管理', url: 'tags' },
    // { name: '统计分析', url: 'stats' },

]

export const Menus = observer(() => {
    const userStore = useContext(UserStore)

    useEffect(() => {
        if (history.location.pathname !== '/login' && !userStore.loggedIn) {
            history.push('/login')
        } else if (history.location.pathname === '/') {
            history.push('/course')
        }
    }, [userStore.loggedIn])

    const [selectedKey, setSelectedKey] = useState(getSelected())

    const dom =
    userStore.loggedIn ? (
        <Menu onSelect={onMenuItemClicked} selectedKeys={[selectedKey]} theme="dark" style={{ width: '20em' }}>
            { adminItems.map((element) => {
                return <Menu.Item key={element.url}>{element.name}</Menu.Item>
            })}
            <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
    ) : null
    return dom

    function onMenuItemClicked(item: IMenuOnSelectArgs) {
        if (item.key === 'logout') {
            if (global.confirm('Sure Logout?')) {
                userStore.clearToken()
                global.location.reload()
            }
            return
        }

        setSelectedKey(item.key)
        history.push(item.key)
    }
})

interface IMenuOnSelectArgs {
  item: any;
  key: string;
  selectedKeys: string[];
}

function getSelected() {
    const url = history.location.pathname
    try {
        return adminItems.filter(i => url.includes(i.url))[0].url
    } catch {
        return '/course'
    }
}
