import logo from '../../assets/logo.svg';
import register from '../../assets/login_image_2.svg';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import styles from './signin.module.css';

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Welcome</h1>
          <form className={styles.loginForm}>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="password" 
                placeholder="Password" 
                required 
                className={styles.formInput}
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
            <button type="submit" className={styles.signInButton}>
              Sign in
            </button>
            <button 
              type="button" 
              className={styles.createButton}
              onClick={() => navigate('/register')}
            >
              Create account
            </button>
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
