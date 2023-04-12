import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";
import newsletter from "../images/newsletter.png";


const Footer = () => {
  return (
    <>
    <footer className="py-3">
      <div className="container col-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center ">
              <img src={newsletter}/>
              <h2 className="mb-0 text-white">Sing up for newsLetter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group ">
  <input type="text" class="form-control py-1" placeholder="Your Email Adress " aria-label="Your Email Adress" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Sucribe</span>
  
  
 
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container col-xxl">
        <div className="row">
          <div className="col-4"><h4 className="text-white mb-4">Contact Us</h4>
          <div>
            <address className="text-white fs-6">Hno: Sakhakot Bazar kp,<br/> pincode:123464</address>
            <a className="mt-4 d-block mb-3 text-white" href="tel:+923440086301">+923440086801</a>
            <a className="mt-4 d-block mb-3 text-white" href="mail:ziashah@gmail.com">ziashah@gmail.com</a>
            <div className="social-icons d-flex align-items-center gap-30 mt-4">
              <a href="">
               <BsLinkedin className="text-white fs-5"/>
              </a>
              <a to="/">
                <BsGithub className="text-white fs-5" />
              </a>
              <a to="/">
              <BsYoutube className="text-white fs-5"/>
              </a>
              <a to="/">
              <BsInstagram className="text-white fs-5"/>
              </a>
            </div>
          </div>
          </div>
          <div className="col-3"><h4 className="text-white mb-4">Information</h4> 
          <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white mb-1">Privacy Policy</Link>
              <Link to="/refun-policy" className="text-white mb-1">Refund policy</Link>
              <Link to ="/shiping-policy"className="text-white mb-1">Shipping Poicy</Link>
              <Link to ="/term-condition" className="text-white mb-1">Terms & Condition</Link>
              <Link className="text-white mb-1">Blogs</Link>
              </div></div>
          <div className="col-3"><h4 className="text-white mb-4">Account</h4> 
          <div className="footer-links d-flex flex-column">
              <Link className="text-white mb-1">About us</Link>
              <Link className="text-white mb-1">FAQ</Link>
              <Link className="text-white mb-1">Contact</Link>
              
              </div></div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white mb-1">Laptop</Link>
              <Link className="text-white mb-1">Headpones</Link>
              <Link className="text-white mb-1">Tablets</Link>
              <Link className="text-white mb-1">Watch</Link>
              </div></div>
        </div>
      </div>

    </footer>
    <footer className="py-4 ">
      <div className="container col-xxl">
        <div className="row">
          <div className="col-12 mb-0 text-white">
            <p className="text-center">&copy:{new Date().getFullYear()}:powerd by Developers</p>

          </div>

        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer