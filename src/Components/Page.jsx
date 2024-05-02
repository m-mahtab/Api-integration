import React, { useEffect, useState,useContext } from 'react'

import NoteContext from '../context/notes/NoteContext';
import  './Page.css'

function Page(props) {
  const a = useContext(NoteContext)
  
 
  // const [image, setImage] = useState('');
  // const [para, setPara] = useState('');

  // useEffect(()=>{
   
  //   setImage(props.image);
  //   setPara(props.para);
  // }, [props])
  
  return (
    <div>
        <div className='box' >
          <h1>{a.title}</h1>
        </div>
        <img  className='image' src = {a.image}/>
        <h3 className='title'>{a.title}</h3>
        <p className='para'>
         {a.para}</p>
    </div>
  )
}

export default Page


{/* < Page color = "#5D7183" title = "CUSTOM LOGO DESIGN" title2 = 'With Different Props' image = 'assets/images/logo.png'
        image2 = 'assets/images/limelight.PNG'
        para = 'In this age of technology as online business is becoming more and more Paraopular  businesses need to ensure they have a secure andeasy system to be able to charge customers online Our service provides you with a merchant account with the ability of accepting online payments through payment gateway.'
/>  */}