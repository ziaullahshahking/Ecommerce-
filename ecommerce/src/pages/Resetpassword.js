import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Custominput from '../components/Custominput';

const Resetpassword = () => {
  return (
    <>
      <Meta title={"resetpass"}/>
    <Bredcrumb title="resetpass"/>
    <div className='login-wrapper  py-5 home-wrapper-2'>
        <div className='container col-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center'>Set password</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <Custominput type='password'  name='password' className='form-control' placeholder='password'/>
                        <Custominput type='password'  name='password' className='form-control' placeholder='confomrm-password'/>
                        
                       
                        
                        
                        <div>
                           
                            <div className=' mt-3 d-flex justify-content-center gap-10 align-items-center'>
                                <button className='button border-0'>OK </button>
                                
                            </div>
                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
        </div>

    </div>
    
    </>
  )
}

export default Resetpassword