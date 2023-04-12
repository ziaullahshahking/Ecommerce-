import React from 'react'
import Bredcrumb from '../components/Bredcrumb'


import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Privicypolicy = () => {
  return (
   <>
       <Meta title={"privacy policy"}/>
    <Bredcrumb title="privacy policy"/>
    <section className='policy-wrapper py-5 home-wrapper-2'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}

export default Privicypolicy