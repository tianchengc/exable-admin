import './index.css';
import logo from '../../assets/logo.svg';
import register from '../../assets/login_image_2.svg';
import Footer from '../../components/footer';
const SignIn = () => {
  return (
    <div className="sign-in-container">
      <header className="header">
        <img src={logo} alt="Lung Health Foundation Logo" className="logo" />
      </header>

      <main className="main-content">
        <div className="left-section">
          <h1>Welcome</h1>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit" className="btn btn-signin">
              Sign in
            </button>
            <button type="button" className="btn btn-create">
              Create account
            </button>
          </form>
        </div>

        <div className="right-section">
          <h1>I am an admin</h1>
          <img
            src={register}
            alt="Admin Illustration"
            className="admin-image"
          />
          <a href="#" className="not-admin">
            ← Oops, I am not an admin
          </a>
        </div>
      </main>
      <Footer className="bottom-0 left-0 w-full flex-0" />
    </div>
  );
};

export default SignIn;
