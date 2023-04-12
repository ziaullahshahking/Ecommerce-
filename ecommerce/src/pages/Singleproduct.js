import React, { useState } from 'react'
import Bredcrumb from '../components/Bredcrumb'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai';


import Meta from '../components/Meta';
import Spicialproduct from '../components/Spicialproduct';
import Productcard from '../components/Productcard';

const Singleproduct = () => {
    const props = {
        width: 594,
        height: 340,
        zoomWidth: 400,
    
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
      };
    const [orderproduct , setorderproducct]=useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
   <>
     <Meta title={"Product name"}/>
    <Bredcrumb title="product name"/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container col-xxl '>
            <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div>
                            <ReactImageZoom {...props} />
                        </div>
                        </div>
                        <div className='other-product-imgages d-flex flex-wrap gap-15'>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'/></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'/></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'/></div>
                            <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'/></div>

                           

                        </div>

                    
                    
                </div>
                <div className='col-6'>
                    <div className='mine-product-detail'>
                        <div className='border-bottom'>
                        <h3 className='title'>hi this for kid and very good and good</h3>
                        </div>
                        <div className='border-bottom py-3'>
                            <p className='price'>$100</p>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars
count={5}
value="3"
size={24}
activeColor="#ffd700"
/>
<p >Based on 2 rewies</p>

                            </div>
                            <a className='review-btn' href='#review'>Write a reweiv</a>
                        </div>
                        <div className='border-bottom'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3>Type:</h3> <p  className='product-data'>watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                            <h3 className='product-heading'>Braand:</h3> <p className='product-data'>havels</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                            <h3  className='product-heading'>category:</h3> <p className='product-data'>wtach</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                            <h3  className='product-heading'>tags :</h3> <p className='product-data'>watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                            <h3  className='product-heading'>avilibailty :</h3> <p className='product-data'>in store</p>
                            </div>
                            <div className='d-flex gap-10 flex-column'>
                            <h3  className='product-heading'>size:</h3>
                           <div className='d-flex flex-wrap gap-15'>
                            <span className='badge border border-1 bg-white text-dark border-secondry'>S</span>
                            <span className='badge border border-1 bg-white  text-dark border-secondry'>M</span>
                            <span className='badge border border-1 bg-white  text-dark border-secondry'>XL</span>
                            <span className='badge border border-1 bg-white  text-dark border-secondry'>XXL</span>
                           </div>
                            </div>
                            <div className='d-flex gap-10 flex-column'>
                            <h3  className='product-heading'>color:</h3> 
                            <Color/>
                            </div>
                            <div className='d-flex  align-items-center gap-10 flex-row'>
                            <h3  className='product-heading'>Quantity:</h3>
                            <div className=''>
                                <input className='form-control' min={1} max={10} style={{width: "50px"}} type='number' name='' id=''/>
                            </div>
                            <div className='d-flex align-items-center gap-30'> <button className='button border-0'>Add to cart </button>
                                <button to="/singup" className='button singup'>Buy now</button></div>
                            </div>
                            <div className='d-flex align-items-center gap-15'>
                                <div>
                                    <a href=''><TbGitCompare className='fs-5 me-2'/>Add to compare</a>
                                </div>
                                <div> <a href=''><AiOutlineHeart className='fs-5 me-2'/>Add to wishlist </a></div>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3>Shiping and returns</h3> 
                                <p  className='product-data'>Free shiping and return and much more and i well pay you </p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3>Copy product Link</h3> 
                                <a href='javascript:void(0)' onClick={()=>{copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}}>
                              copy product link 
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <div className='descreption-wrapper py-5 home-wrapper-2'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-12'>
                <h4>Discreption</h4>
                    <div className='bg-white'>
                    
                    <p className='bg-white p-3'>
                        this is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and goodthis is very nice and good
                    </p>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <h3 id="review">Revewies</h3>
                   <div className='review-inner-wrapper'>
                   <div className='review-head d-flex justify-content-between align-items-end'>

<div>
    <h4 className='mb-2'>Coustomer Revies</h4>
    <div className='d-flex gap-10'>
    <div className='d-flex gap-10 align-items-center'>
    <ReactStars
count={5}
value="3"
size={24}
activeColor="#ffd700"
/>
<p className='t-review'> 2 rewies</p>
    </div>

    </div>

    

</div>
{
orderproduct && (
<div>
<a className='text-dark text-decoration-underline' href=''>Write a review</a>
</div>
)
}
<div>

</div>


                       </div>
                       <div  className='review-form py-4'>
                        <h4>write a reveiw</h4>
                       <form action="" className='d-flex flex-column gap-15'>
                        <div>
                        <ReactStars
                     count={5}
                       value="3"
                       size={24}
                       edit={true}
                    activeColor="#ffd700"
/>
                        </div>
               
                 
                
                <div>
                <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                </div>
                <div className='d-flex justify-content-end'>
                  <button className='button border-0'>submit Review</button>
                </div>

              </form>
                       </div>
                       <div className='reviews'>
                        <div className='review'>
                        <div className='d-flex gap-10 align-items-center'>
                            <h6  mb-0>Navdep</h6>
                        <ReactStars
count={5}
value="3"
size={24}
activeColor="#ffd700"
/>
                        </div>
<p className='mt-3'>This is very nice and good and very nice jjpat cat This is very nice and good and very nice jjpat cat  </p>


                        </div>
                       </div>
                   </div>

               
               
            </div>
             </div>
          
        </div>

    </section>
    <section className="feature-wrapper py-3 home-wrapper-2">
      <div className="container col-xxl" >
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popular Product</h3>
          </div>
        <Productcard/>
        
        </div>
      </div>
     


    </section>

   </>
  )
}

export default Singleproduct