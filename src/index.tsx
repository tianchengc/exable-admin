import './styles/index.css';
import './styles/theme.css';
import './styles/tw.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
