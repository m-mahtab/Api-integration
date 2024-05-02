import './App.css';
import './Register.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './logincontext/AuthProvider';
import Newsletter from './Components/NewsLetter';
import Contacts from './Components/Contacts';
import Error from './Components/Error';
import MainHeader from './Components/MainHeader';
import Register from './Components/Register';

function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const { state } = useContext(AuthContext);
  const data = state.userData;

 
  useEffect(() => {
    
    if (!data ) {
      navigate('/register')
    }
    else if (data && location.pathname === '/register') {
      navigate('/mainheader')
    }
  }, [data]);

  return (

    <div className='App'>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="mainheader" element={<MainHeader data = {data} />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="contacts" element={<Contacts data = {data}/>} />
        <Route path="*" element={<Error />} />

      </Routes>

    </div>
  );
}

export default App;






