import React from 'react'
import './App.css';
const Footer = () => {
  return (
    <footer className='footer'>
     <div className='container'>
        <div className='row'>
            <div className='footer-col'>
                <h4>company</h4>
                <ul>
                    <li><a >about us</a></li>
                    <li><a >our service</a></li>
                    <li><a >privacy policy</a></li>
                    <li><a >affiliate program  </a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>get help</h4>
                <ul>
                    <li><a >FAQ</a></li>
                    <li><a >shipping</a></li>
                    <li><a >returns</a></li>
                    <li><a >order status</a></li>
                    <li><a >payment options</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>online shop</h4>
                <ul>
                    <li><a >canapé</a></li>
                    <li><a >chaise</a></li>
                    <li><a >table</a></li>
                    <li><a >lit</a></li>

                </ul>
            </div>
            <div className='footer-col'>
                <h4>follow us</h4>
                <div className='social-links'>
                    <a><i className='fab fa-facebook'></i></a> 
                    <a><i className='fab fa-twitter'></i></a>
                    <a><i className='fab fa-instagram'></i></a>
                    <a><i className='fab fa-linkedin'></i></a> 
                </div>
            </div>

        </div>
     </div>
    </footer>
  )
}

export default Footer