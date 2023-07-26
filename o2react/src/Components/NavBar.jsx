import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FcMenu } from 'react-icons/fc'
import O2 from '../Imags/logo.png'
import Menu from './Menu'

const NavBar = () => {

  function showit() {
    var x = document.getElementById("menu");
    // console.log(width);

    var width = window.innerWidth;
    if (x.style.display === "none" || width > 768) {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }
  // function dontshowit() {
  //   var width = window.innerWidth;
  //   if (width > 768) {
  //     showit();
  //     console.log(width);
  //   }
  // }
  // dontshowit();
  return (
    <>
      {/* <div className='container p-0'>
        <nav>
          <div className="lg-nav">
            <div className="row text-center w-100 mx-0 ">
              <div className="col col-2 border"><img src={O2} alt='O2-Image' width={70} /></div>
              <div className="col border">
                <div className="row">
                  <a href="" className="px-1">
                    About
                  </a>
                  <a href="" className="px-1">
                    Events
                  </a>
                  <a href="" className="px-1">
                    kane
                  </a>
                </div>
              </div>
              <div className="col col-2 border"><FaUserCircle size={50} /></div>
            </div>
          </div>

          <div className="mobile-nav">
            <div className="row text-center w-100 mx-0 ">
              <div className="col col-2 border">
                <a href='/'><img src={O2} alt='O2-Image' width={70} loading='eager' /></a>
              </div>
              <div className="col col-7 border"></div>
              <div className="col border">
                <button onClick={showit}>
                  <FcMenu />
                </button>
              </div>
            </div>
            <div className="row w-100 mx-0">
              <div className="menu p-0" id="menu">
                <Menu />
              </div>
            </div>
          </div>
        </nav >

      </div > */}

      <nav className='d-nav'>
        <div className="container">
          <img src={O2} alt='O2-Image' width={70} />
        </div>
        <div className="container">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Event</a>
          <a href="#">Sponsors</a>
        </div>
        <div className="container">
          <FaUserCircle size={60} color='rgb(255, 165, 13)' />
        </div>
      </nav>

      <nav className='m-nav'>
        <div className="container">
          <img src={O2} alt='O2-Image' width={70} />
        </div>
        <div className="container">
          <button type="button"
            className='menu-btn'
            onClick={showit}>
            <FcMenu size={40} />
          </button>
        </div>
      </nav>
      <div className="menu" id="menu">
        <Menu color='rgb(255,255,255)' />
      </div>
    </>
  )
}

export default NavBar