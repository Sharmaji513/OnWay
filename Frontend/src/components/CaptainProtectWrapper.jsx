import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token'); // Get the token from localStorage directly
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token) {
        navigate('/captain-login'); // Redirect to login if no token is found
      }
    }, [token, navigate]);
  
    return <>{token ? children : null}</>;
}

export default CaptainProtectWrapper;