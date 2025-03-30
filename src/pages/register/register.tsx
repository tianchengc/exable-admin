import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { registerUser } from '../../store/actions/userActions';
import { RegistrationPayload } from '../../store/types';
import image from '../../assets/register_image.svg';
import logo from '../../assets/logo.svg';
import Footer from '@components/Footer';
import styles from './register.module.css';
import RegisterForm from './RegisterForm';

export const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (formData: RegistrationPayload) => {
    const result = await dispatch(registerUser(formData));
    
    if (result.success) {
      // Registration successful
      navigate('/login');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <img src={logo} alt="Lung Health Foundation Logo" className={styles.logo} />
      </header>

      <main className={styles.mainContent}>
        <div className={styles.formWrapper}>
          <RegisterForm submit={handleSubmit} />
        </div>

        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt="Illustration"
            className={styles.image}
          />
        </div>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
}

export default Register;
