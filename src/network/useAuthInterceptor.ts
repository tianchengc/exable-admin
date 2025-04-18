import { useNavigate } from 'react-router-dom';
import apiClient from './index';

const useAuthInterceptor = () => {
  const navigate = useNavigate();

  // Add a response interceptor
  apiClient.interceptors.response.use(
    (response) => {
      // If the response is successful, return it
      return response;
    },
    (error) => {
      // Check if the error is due to an expired or missing cookie
      if (error.response?.status === 401) {
        // Log the user out and redirect to SignIn
        console.error('Authentication failed. Redirecting to SignIn...');
        navigate('/signin');
      }
      return Promise.reject(error);
    }
  );
};

export default useAuthInterceptor;