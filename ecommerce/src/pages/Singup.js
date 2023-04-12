import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import Custominput from '../components/Custominput';
import { Link } from 'react-router-dom';

const Singup = () => {
  return (
   <>
    <Meta title={"Singup"}/>
    <Bredcrumb title="singup"/>
    <div className='login-wrapper  py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Sing up</h3>
                    <form action="" className="d-flex flex-column gap-15">
                <Custominput type="text" name="name" placeholder="Name" />
                <Custominput type="email" name="email" placeholder="Email" />
                <Custominput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
                  </div>
                </div>
              </form>
                </div>
            </div>
        </div>

    </div>
   
   </>
  )
}

export default Singup