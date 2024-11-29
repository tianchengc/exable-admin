import { observer } from 'mobx-react'
import { useContext } from 'react'
import UserStore from '../../stores/UserStore'
import '../../styles/common-style.css'
import { message } from 'antd'
import { NetworkError } from '../../network'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router'

export const Login = observer(() => {
    const userStore = useContext(UserStore)
    const navigate = useNavigate()

    return <div>
        <div id="login-form">
            <GoogleLogin
                onSuccess={(r) => onFinish(r.credential)}
                onError={() => console.error('error')}
            />
        </div>
    </div>

    function onFinish(credential?: string) {
        if (!credential) return
        userStore.login(credential)
            .then(() => navigate('/course'))
            .catch((error: NetworkError) => message.error(error.serverMessage))
    }
})
