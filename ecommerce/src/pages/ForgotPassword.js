import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Custominput from '../components/Custominput';

const ForgotPassword = () => {
  return (
   <>
   <Meta title={"FORGOT PASSWORD"}/>
    <Bredcrumb title="Forgor  password"/>
    <div className='login-wrapper  py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>RESET Your forgot password</h3>
                    <p className='text-center my-2'>we well send p</p>
                   
                    <form action='' className='d-flex flex-column gap-15'>
                    <Custominput type='email'  name='email' className='form-control' placeholder='email' />
                        
                        
                        <div>
                            <Link to="/forgot-password">RESET Your forgot password</Link>
                            <div className=' mt-3 d-flex flex-column justify-content-center gap-10 align-items-center'>
                                <button className='button border-0 ' type=' submit'>submit</button>
                                <Link to='/login'>Cancel</Link>
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

export default ForgotPassword