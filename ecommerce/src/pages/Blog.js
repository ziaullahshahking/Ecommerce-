import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import Blogcard from "../components/Blogcard";

const Blog = () => {
  return (
   <>
   <Meta title={"Blogs"}/>
    <Bredcrumb title="Blogs"/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container col-xxl'>
            <div className='row'>
                <div className='col-3'>
                <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
                </div>
                <div className='col-9'>
                    <div className='row'>
                      <div className='col-6 mb-3'>
                    <Blogcard/>
                    </div>
                    <div className='col-6 mb-3'>
                    <Blogcard/>
                    </div>
                    <div className='col-6 mb-3'>
                    <Blogcard/>
                    </div>
                    <div className='col-6 mb-3'>
                    <Blogcard/>
                    </div>
                    
                    </div>
                </div>
            </div>
          </div>


    </div>
   
   </>
  )
}

export default Blog