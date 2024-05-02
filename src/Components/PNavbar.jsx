import React, {useContext} from 'react';
import {useNavigate } from 'react-router';
import {NavLink} from 'react-router-dom'

import {AuthContext} from '../logincontext/AuthProvider';

function PNavbar() {

  const navigate = useNavigate();
  const {  dispatch } = useContext(AuthContext)
 

  function logout (){ 
    dispatch({
      type : "LOGOUT",
      accessToken : null,
    }) 
    navigate('/register');
  }
  
  return (
  <div> 
    <div className='wrapper'>
      <div className='left'>
       <img className='logo' src = 'assets/images/dummy.png'/>
      </div>
      <div className='center'>
        <ul>
        <li><NavLink to = '/mainheader'>HOME</NavLink></li>
        <li><NavLink to = '/newsletter'>NEWSLETTER</NavLink></li>
        <li ><NavLink to = '/contacts'>CONTACTS</NavLink></li> 
        </ul>
      </div>
      <div className='right'> 
        <button className='btn' onClick={logout}>Logout</button>
        {/* <button className='btn'>Cart</button> */}
      </div>
      
    </div>
    
  </div>
  
  )
}

export default PNavbar