import { observer } from 'mobx-react'
import { useContext } from 'react'
import UserStore from '../../stores/UserStore'
import '../../common-style.scss'
import { message, Form, Input, Button } from 'antd'
import { NetworkError } from '../../network'
import { IUser } from '../../model'
import history from '../../stores/history'
import { GoogleLogin } from '@react-oauth/google'

export const Login = observer(() => {
    const userStore = useContext(UserStore)
    return <div>
        <div id="login-form">
            <GoogleLogin 
                onSuccess={(r) => onFinish(r.credential)}
                onError={() => console.error('error')}
            />
        </div>
    </div>


    function onFinish(credential ?: string) {
        if (!credential) return 
        userStore.login(credential)
            .then(() => history.replace('/course'))
            .catch((error: NetworkError) => message.error(error.serverMessage))
    }
})
