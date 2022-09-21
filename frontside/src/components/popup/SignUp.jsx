import React from 'react'
import SignIn from './SignIn';
import './SignUp.css'
import { useState } from 'react';
import axios from 'axios';
import IP from '../api/ip';




function SignUp(props) {
    const [toggel, setToggel]=useState(false)

    const [formData, setFormData] = useState({
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: ''
    })
    const send = () => {
      axios.post(`${IP}/auth/client/signup`, formData)
      .then((Response) => {
        console.log(Response.data)
      })
    }
    
  return (props.trigger) ? (
    <div className='popupup'>
        <div className='popup-innerup'>
        <div className='signup'>
        <p>Sign Up</p>
        <label className='inputup'>User name</label>
        <input className='username' type="text" placeholder='User name' value={formData.username} onChange={event => {setFormData(event.target.value)}}></input>

        <label className='name'>First name</label>
        <input className='nameinput' type="text" placeholder='First name' value={formData.firstname} onChange={event => {setFormData(event.target.value)}}></input>

        <label className='lastname'>last name</label>
        <input className='lastnameinput' type="text" placeholder='Last name' value={formData.lastname} onChange={event => {setFormData(event.target.value)}}></input>

        <label className='email'>Address Email</label>
        <input className='emailinput' type="text" placeholder='Enter address' value={formData.email} onChange={event => {setFormData(event.target.value)}}></input>

        <label className='pwd'>Password</label>
        <input className='pwdinput' type="password" placeholder='Enter Password' value={formData.password} onChange={event => {setFormData(event.target.value)}}></input>

        <label className='confirm'>Confirm Password</label>
        <input className='confirmpwd' type="password" placeholder='Confirm Password' value={formData.confirmpassword} onChange={event => {setFormData(event.target.value)}}></input>

        <button className='signup-btn' onClick={send}>SignUp</button>
        <p className='signin'>Already resgistred <span tog={toggel} setT={setToggel}>sign in?</span></p>
        {toggel && <SignIn/>}
        </div>

        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        { props.children } 
        </div>
    </div>
  ) :"";
}

export default SignUp
