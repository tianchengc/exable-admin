import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setUser, setLoading, setError } from '../store/actions/userActions';

const Login = () => {
  const dispatch = useAppDispatch();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  
  const handleLogin = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));
      
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      dispatch(setUser(data));
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'An error occurred'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <input
        type="email"
        value={credentials.email}
        onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login; 