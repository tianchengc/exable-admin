import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '@assets/logo.svg';
import register from '@assets/login_image_2.svg';
import Footer from '@components/Footer';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import styles from './signin.module.css';
import { loginUser } from '@store/slices/userSlice';
import Button from '@components/Button';
import InputField from '@components/InputField';
import { selectIsLoggedIn } from '@store/slices/userSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { loading, error } = useAppSelector((state) => state.user);
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e: FormEvent) => {
    dispatch(loginUser({
      email,
      password,
      type: 'ADMIN'
    }));
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Welcome</h1>
          <form className={styles.loginForm}>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <div className={styles.formGroup}>
              <InputField 
                type="email" 
                placeholder="Email" 
                required 
                className={styles.formInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <InputField 
                type="password" 
                placeholder="Password" 
                required 
                className={styles.formInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.options}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                Remember me
              </label>
              <Button
                category="link"
              >Forgot password</Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                category="primary"
                onClick={handleLogin}
                disabled={loading}
              >Sign in
              </Button>
              <Button
                category="secondary"
                disabled={loading}
                onClick={() => navigate('/register')}
              >Create account
              </Button>
            </div>
          </form>
        </div>

        <div className={styles.rightSection}>
          <h1 className={styles.title}>I am an admin</h1>
          <img
            src={register}
            alt="Admin Illustration"
            className={styles.adminImage}
          />
        </div>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
};

export default SignIn;
