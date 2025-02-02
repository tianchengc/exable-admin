import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import register from '../../assets/login_image_2.svg';
import Footer from '../../components/footer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './signin.module.css';
import { loginUser } from '../../store/slices/userSlice';

interface InputFieldProps {
  type: string;
  placeholder: string;
  required?: boolean;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  required = false,
  className,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    required={required}
    className={className}
    value={value}
    onChange={onChange}
  />
);

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { loading, error } = useAppSelector((state) => state.user);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const result = await dispatch(loginUser({
      email,
      password,
      type: 'ADMIN'
    }));

    if (loginUser.fulfilled.match(result)) {
      navigate('/');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Welcome</h1>
          <form className={styles.loginForm} onSubmit={handleLogin}>
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
              <a href="#" className={styles.forgotPassword}>
                Forgot password
              </a>
            </div>
            <div className={styles.buttonContainer}>
              <button 
                type="submit" 
                className={styles.signInButton}
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
              <button 
                type="button" 
                className={styles.createButton}
                onClick={() => navigate('/register')}
                disabled={loading}
              >
                Create account
              </button>
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
          <a href="#" className={styles.notAdmin}>
            ← Oops, I am not an admin
          </a>
        </div>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
};

export default SignIn;
