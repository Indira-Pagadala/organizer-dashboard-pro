
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to dashboard on load
    navigate('/dashboard');
  }, [navigate]);
  
  return null; // This component will redirect, so no UI needed
};

export default Index;
