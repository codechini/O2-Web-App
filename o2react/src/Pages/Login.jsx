import React from 'react';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
  function greet() {
    console.log("Howdy mate");
  }
  return (
    <>
      <div className="container">
        <div className="outer">
          <div className="inner">
            <p className='header'>Login</p>
            <form action="" method="get" onSubmit={greet}>
              <input type="text" placeholder='Name' id='uname' autoComplete='username' />
              <input type="email" placeholder='Email' id='email' autoComplete='username email' pattern='"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"' />
              <input type="password" placeholder='Password' id='pass' autocomplete="current-password" />
              <input type="submit" value="submit" />
            </form>
            <span>OR</span>
            <div className="container">
              <div className="login-w-google">
                <a href="https://ghchart.rshah.org/">
                  <FcGoogle size={26} />&nbsp;&nbsp;Login with Google
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Login