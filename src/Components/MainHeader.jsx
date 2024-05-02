import React from 'react'

import { Outlet } from 'react-router-dom';
import PNavbar from './PNavbar';
import Home from '../Pages/Home';
const MainHeader = (props) => {
  const { data } = props;
  
  return (
    <div>
        <PNavbar data = {data}/>
        <Home data = {data}/>
        <Outlet/>
    </div>
  )
}

export default MainHeader