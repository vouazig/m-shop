import React,{useState} from 'react';
import axios from 'axios';
// import '../Login/style.css';
import IP from '../api/ip';




const Login= () => {
 

  const [formData, setFormData] = useState({
  username:"",
  password:"" 
  });



const send = () => {
  axios.post(`${IP}/auth/admin/signin`, formData)
  .then(response => {
    console.log(response);
  })
}


  return (
    <>
    <div className='form-container'>
       <div>
      <label htmlFor="username">username</label>
      <input type="username" placeholder='Username' value={formData.username}
      onChange={(event)=>{
        setFormData({...formData, username: event.target.value})
      }} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input 
      type="password" 
      placeholder='Password'
      value={formData.password}
      onChange={(event)=>{
        setFormData({...formData, password: event.target.value})
      }}
      />
    </div>
    <div id='forget-password'>
      <a href="#/">Forget Password?</a>
    </div>
    <div>
      <button id='connecter' onClick={send} >SE CONNECTER</button>
    </div>
    </div>
   
    </>
  )
}

export default Login