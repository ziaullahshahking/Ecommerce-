import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Custominput from '../components/Custominput';

const Login = () => {
  return (
   <>
     <Meta title={"Login"}/>
    <Bredcrumb title="Login"/>
    <div className='login-wrapper  py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>LOgin</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <Custominput type='email'  name='email' className='form-control' placeholder='email'/>
                        <Custominput type='password'  name='password' placeholder='password' className='form-control'/>                      
                       
                        <div>
                            <Link to="/forgot-password">Forgot Password</Link>
                            <div className=' mt-3 d-flex justify-content-center gap-10 align-items-center'>
                                <button className='button border-0'>LOgin</button>
                                <Link to="/singup" className='button singup'>singup</Link>
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

export default Login