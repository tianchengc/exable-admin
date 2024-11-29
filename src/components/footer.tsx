import { CSSProperties } from 'react';
import logo from '../assets/logo_image_white.svg';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {
  const footerStyle: CSSProperties = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    zIndex: 999999
  };

  const footerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    height: '40px',
    padding: '0 2em',
  };

  const textStyle: CSSProperties = {
    flexGrow: 1,
    textAlign: 'center' as 'center',
  };

  const iconsStyle = {
    display: 'flex',
    gap: '10px',
  };

  const iconStyle = {
    fontSize: '1.5em',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <span style={textStyle}>patientsupport@lunghealth.ca | 514 548 3233</span>
        <div style={iconsStyle}>
          <FacebookFilled style={iconStyle} />
          <LinkedinFilled style={iconStyle} />
          <InstagramFilled style={iconStyle} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
