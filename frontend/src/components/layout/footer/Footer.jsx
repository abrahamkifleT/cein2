import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-container'>

        <div className='footer-links'>
          <div className='footer-contactus'>
            <h3>CONTACT US</h3>
            <a href="">+1 (844) 326-6000</a>
            <a href="">Email Us</a>
            <a href="">1000 E 10th St, Austin, TX 78702</a>
          </div>

          <div className='footer-customers'>
            <h3>CUSTOMERS</h3>
            <a href="">Start a Return</a>
            <a href="">Return Policy</a>
            <a href="">FAQ</a>
            <a href="">Catalogs and Mailers</a>
            <a href="">About Group Gifting</a>
          </div>

          <div className='footer-company'>
            <h3>COMPANY</h3>
            <a href="">About Us</a>
            <a href="">Sustainability</a>
            <a href="">Discover Revive</a>
            <a href="">Careers</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms</a>
          </div>
        </div>


        <div className='footer-getintouch'>
          <h3>Get the latest new from us</h3>
          <div>
            <input type="text" placeholder='Enter Your Email Address' />
            <p>By signing up, you agree to our Privacy Policy and Terms of Service.</p>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer