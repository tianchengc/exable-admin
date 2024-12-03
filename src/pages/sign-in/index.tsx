import './index.css';
import logo from '../../assets/logo.svg';
import register from '../../assets/login_image_2.svg';
const SignIn = () => {
  return (
    <div className="sign-in-container">
      {/* 页头 */}
      <header className="header">
        <img src={logo} alt="Lung Health Foundation Logo" className="logo" />
      </header>

      {/* 主内容 */}
      <main className="main-content">
        {/* 左侧登录部分 */}
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

        {/* 右侧图像和管理员部分 */}
        <div className="right-section">
          <h2>I am an admin</h2>
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

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-content">
          <span>patientsupport@lunghealth.ca | 514 948 3233</span>
          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">in</a>
            <a href="#">ig</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
