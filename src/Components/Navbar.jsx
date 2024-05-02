import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
let name = "AR ESHOP"

function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} Users Logged in`
  }, [count])
  
  return (

  <div> 
    <div className='wrapper'>
      <div className='left'>
       <h1 className='logo'>{name}</h1>
      </div>
      <div className='center'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PRODUCTS</li>
          <li>PAGES</li>
          <li>CONTACT</li>
          <li>
          <div className='icon'>
            <SearchIcon/>
          </div>
          </li>
        </ul>
      </div>
      <div className='Right'> 
        <button className='btn' onClick={()=> setCount(count + 1)}>Login<PersonIcon/></button>
        <button className='btn'>Cart <ShoppingCartIcon/></button>
      </div>
    </div>
    
  </div>
  
  )
}

export default Navbar