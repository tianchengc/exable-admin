import logo from '../assets/logo_image_white.svg';
import { FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bottom-0 w-full flex justify-between items-center p-2 z-50 ${className}`} style={{ backgroundColor: 'var(--tertiary-color)' }}>
      <div className="flex items-center w-full justify-between">
        <img src={logo} alt="Logo" className="h-10 px-8" />
        <span className="flex-grow text-center" style={{ color: 'white' }}>patientsupport@lunghealth.ca | 514 548 3233</span>
        <div className="flex gap-2.5">
          <FacebookFilled style={{ color: 'white', fontSize: '2rem' }} />
          <LinkedinFilled style={{ color: 'white', fontSize: '2rem' }} />
          <InstagramFilled style={{ color: 'white', fontSize: '2rem' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
