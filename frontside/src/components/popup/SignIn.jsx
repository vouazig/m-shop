import React from 'react'
import './SignIn.css'


function SignIn(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
      };
    

  return (props.trigger) ? (
    <>
    <div className='popupin'>
      <div className='popup-innerin'>
      <div className='signup'>
      <p>Sign In</p>
      <label className='Email'>Email address</label>
      <input className='Emailin' type="text" placeholder='Enter email'></input>

      <label className='Pwd'>Password</label>
      <input className='Pwdin' type="password" placeholder='Enter Password'></input>
      <label className='remember-me' for="remember me">Remember me</label>
      <input className='check'  onChange={handleChange} type="checkbox"></input>

      <button className='submit'>Submit</button>
      </div>
      <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
      { props.children }
      </div>
    </div>
    </>
  ) :""; 
}

export default SignIn
