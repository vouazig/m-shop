import React,{useState,useEffect,useRef,useContext} from 'react';
import axios from 'axios';
import '../Login/style.css';
import IP from '../../api/ip';




const Login= () => {
 
  const shopownerRef = useRef();
  const errRef = useRef();
  const [formData, setFormData] = useState({
  email:"",
  password:"" 
  });
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


const send = () => {
  axios.post(`${IP}/shopkeepers/login`, formData)
  .then(response => {
    console.log(response);
  })
}


  return (
    <>
    <div className='form-container'>
       <div>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Email' value={formData.email}
      onChange={(event)=>{
        setFormData({...formData, email: event.target.value})
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
      <button id='connecter' onClick={send}>SE CONNECTER</button>
    </div>
    </div>
   
    </>
  )
}

export default Login