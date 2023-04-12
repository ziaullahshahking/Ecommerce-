import React from 'react'
import Bredcrumb from '../components/Bredcrumb'

import Meta from '../components/Meta';
import watch from "../images/watch.jpg";
import {AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
   <>
    <Meta title={"Cart"}/>
    <Bredcrumb title="Cart"/>
    <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 d-flex justify-content-between align-content-center'>
                       <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'><img src={watch} className='img-fluid' alt='product image'/></div>
                        <div className='w-75'>
                            <p >hhghgg</p>
                            <p > size: hhhg</p>
                            <p > color: oomj</p>
                        </div>
                       </div>
                       <div className='cart-col-2'>
                        <h5 className='price'>$100</h5>
                       </div>
                       <div className='cart-col-3 d-flex align-items-center gap-15' >
                        <div><input className='form-control' type='number' name="" id='' min={1} max={10}/></div>
                        <div><AiFillDelete className='text-danger'/></div>
                       </div>
                       <div className='cart-col-4'>100</div>
                    </div>
                    <div className='cart-data py-3 d-flex justify-content-between align-content-center'>
                       <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'><img src={watch} className='img-fluid' alt='product image'/></div>
                        <div className='w-75'>
                            <p>hhghgg</p>
                            <p> size: hhhg</p>
                            <p> color: oomj</p>
                        </div>
                       </div>
                       <div className='cart-col-2'>
                        <h5 className='price'>$100</h5>
                       </div>
                       <div className='cart-col-3 d-flex align-items-center gap-15' >
                        <div><input className='form-control' type='number' name="" id='' min={1} max={10}/></div>
                        <div><AiFillDelete className='text-danger'/></div>
                       </div>
                       <div className='cart-col-4'>100</div>
                    </div>
                </div>
                <div className='col-12 py-2 mt-4'>
                  <div className='d-flex justify-content-between align-items-baseline'>
                  <Link to="/product"  className="button">Continue to shopping</Link>
                  <div className='d-flex flex-column justify-content-end'>
                    <h4>Sub: totoal $100</h4>
                  <p>taxes and shiping calulated in chekout
                    <Link to="/checkout" className='button'> Chekout </Link>
                  </p>
                  
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
   
   </>
  )
}

export default Cart