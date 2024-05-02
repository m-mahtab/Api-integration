import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../logincontext/AuthProvider';
import Register from './Register';

function RegisterPage() {
  const { state } = useContext(AuthContext);
  const isAuthenticated = state.isAuthenticated;

  useEffect(() => {
    if (isAuthenticated) {
      Navigate('/home');
    }
  }, [isAuthenticated]);


  return (
    <div>
      <Register/>
    </div>
  );
}

export default RegisterPage;
