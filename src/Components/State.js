import React, { Component } from 'react'
import  './Page.css'

export default class State extends Component {
    constructor(props) {
      super(props)
      this.state = {
        color : "#5D7183",
        title : "CUSTOM LOGO DESIGN",
        title2 : 'With Different Props',
       image : 'assets/images/logo.png',
        image2 : 'assets/images/limelight.PNG',
        para : 'In this age of technology as online business is becoming more and more Paraopular  businesses need to ensure they have a secure andeasy system to be able to charge customers online Our service provides you with a merchant account with the ability of accepting online payments through payment gateway.',
      

      }
    }
  render() {
    return (
      <div>
        <div className='box' >
        <h1>{this.state.title}</h1>
        </div>
        <img  className='image' src = {this.state.image}/>
        <h3 className='title'>{this.state.title}</h3>
        <p className='para'>{this.state.para}</p>
        </div>
    )
  }
}
