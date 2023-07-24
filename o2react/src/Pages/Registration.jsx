import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcGoogle } from 'react-icons/fc'


const Registration = () => {
  function greet() {
    console.log("Howdy mate");
  }
  return (
    <>



      <div className="container">
        <div className="outer">
          <div className="inner">
            <p className='header'>Register</p>
            <form action="" method="get" onSubmit={greet}>
              <input type="text" placeholder='Name' id='fname' autocomplete="username" />
              <input type="tel" placeholder="Phone no." id='number' pattern='^[789]\d{9}$' />
              <input type="email" placeholder='Email' id='email' autocomplete="username email"
                pattern='"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"' />
              <input type="password" placeholder='Password' id='pass' autocomplete="current-password" />
              <input type="submit" value="Submit" />
            </form>
            <span>OR</span>
            <div className="container">
              <div className="login-w-google">
                <a href="https://www.google.com/">
                  <FcGoogle size={26} />&nbsp;&nbsp;Login with Google
                </a>
              </div>
            </div>
            <div className="forgot-pass">
              <a href="">Over 60 Click here</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration