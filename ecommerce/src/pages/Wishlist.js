import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';

const Wishlist = () => {
  return (
    <>
        <Meta title={"Wishlist"}/>
    <Bredcrumb title="Wishlist"/>
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-3'>
                <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
                <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className=' py-2'>
                
              <h5 className='title'>Mony phone lande good price and very nice</h5>
                      <h6 className='price'>$100</h6>
              </div>
                    </div>
                    
                </div>
                <div className='col-3'>
                <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
                <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className=' py-2'>
                
              <h5 className='title'>Mony phone lande good price and very nice</h5>
                      <h6 className='price'>$100</h6>
              </div>
                    </div>
                    
                </div>
                <div className='col-3'>
                <div className="wishlist-card position-relative">
                <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
                <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className=' py-2'>
                
              <h5 className='title'>Mony phone lande good price and very nice</h5>
                      <h6 className='price'>$100</h6>
              </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Wishlist