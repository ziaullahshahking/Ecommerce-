import React from 'react'
import Bredcrumb from '../components/Bredcrumb'


import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import blog from "../images/blog-1.jpg"
import { HiOutlineArrowLeft } from "react-icons/hi"; 

const Singleblog = () => {
  return (
    <>
         <Meta title={"dynamic blog name"}/>
    <Bredcrumb title="dynamic blog namet"/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container col-xxl'>
            <div className='row'>
               
            <div className='col-12'>
                <div className='single-blog-card'>
                    <Link to="/blogs" className='d-flex align-items-center gap-10'> < HiOutlineArrowLeft className='fs-5'/> back to blogs</Link>
                    <h3 className='title'>
                        A beutiful Sunday Morning Renasising
                    </h3>
                    <img src={blog} alt='blog' className='img-fluid w-100 my-4'/>
                    <p>
                      this is very good and very nice and more thing like that which we have more this is very good and very nice and more thing like that which we have more
                      this is very good and very nice and more thing like that which we have more this is very good and very nice and more thing like that which we have more
                      this is very good and very nice and more thing like that which we have more this is very good and very nice and more thing like that which we have more
                
        
                    </p>
                </div>
            </div>
            </div>
          </div>


    </div>
    
    
    </>
  )
}

export default Singleblog