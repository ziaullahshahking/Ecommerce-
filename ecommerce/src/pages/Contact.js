import React from 'react'
import Bredcrumb from '../components/Bredcrumb'
import Meta from '../components/Meta';
import {AiFillHome,AiOutlineMail,AiFillInfoCircle } from "react-icons/ai"
import {FiPhoneCall} from "react-icons/fi"


const Contact = () => {
  return (
    <>
      <Meta title={"Contact"}/>
    <Bredcrumb title="Contact"/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div className='container col-xxl'>
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.760886661716!2d71.90631411471082!3d34.45821720367489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d953105e5aef7d%3A0x4fe3947868b691a!2sSakhakot%20Bazaar!5e0!3m2!1sen!2s!4v1680593376814!5m2!1sen!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wraper d-flex justify-content-between'>
              <div><h3 className='contact-title'>contact </h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="text" className='form-control' placeholder='name'/>
                </div>
                <div>
                  <input type="text" className='form-control' placeholder='Email'/>
                </div>
                <div>
                  <input type="tell" className='form-control' placeholder='phone'/>
                </div>
                <div>
                 <textarea placeholder='comments' name='' id='' cols="30"  rows="10"></textarea>
                </div>
                <div>
                  <button className='button border-0'>submit</button>
                </div>

              </form>
              </div>
              <div><h3 className='contact-title'>Get in touch with us</h3>

              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-10 align-items-center'><AiFillHome className='fs-5'/>
                  <address className='mb-0'>sakhakot bazar peshawar kp </address>
                  </li>
                  <li  className='mb-3 d-flex gap-10 align-items-center'><FiPhoneCall className='fs-5'/>
                  <a href='tel:+9234486801'>+7867484746</a>
                  
                  </li>
                  <li className='mb-3 d-flex gap-10 align-items-center'><AiOutlineMail className='fs-5'/>
                  <a href='mailto:ziaullahshah576@gamil.com'>ziaullahshah576@gamil.com</a>
                  
                  </li>
                  <li className='mb-3 d-flex gap-10 align-items-center'><AiFillInfoCircle className='fs-5'/>
                  <p className='mb-0'>Monday - fridaay 10Am - 8Am</p>
                  
                  
                  </li>
                </ul>
              </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Contact