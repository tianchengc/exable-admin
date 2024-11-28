import React, { CSSProperties } from 'react';

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
  };

  const footerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    height: '40px',
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
    height: '30px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <img src="path/to/white-logo.png" alt="Logo" style={logoStyle} />
        <span style={textStyle}>patientsupport@lunghealth.ca | 514 548 3233</span>
        <div style={iconsStyle}>
          <img src="path/to/facebook-logo.png" alt="Facebook" style={iconStyle} />
          <img src="path/to/instagram-logo.png" alt="Instagram" style={iconStyle} />
          <img src="path/to/linkedin-logo.png" alt="LinkedIn" style={iconStyle} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
