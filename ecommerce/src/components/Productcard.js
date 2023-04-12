import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import watch from "../images/watch.jpg";
import wish from "../images/wish.svg";
import headphone from "../images/headphone.jpg";
import view from "../images/view.svg";
 import   prodcompare from "../images/prodcompare.svg";
  import cart from  "../images/add-cart.svg";
     import watch1 from "../images/watch-1.avif"
 



const Productcard = (props) => {
  const {grid}=props
let  location=useLocation();
  return (
    <>
     <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to="/product/id" className="product-card position-relative">
          <div className='wishList-icon position-absolute'>
            <button className='border-0 bg-transparent'><img src={wish}  alt="wishlist"></img></button>
          </div>
            <div className="card-image">
                <img src={watch} alt="product" className="img-fluid"/>
               
                <img src={headphone} alt="product" className="img-fluid"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product">kids heads phone amzing and smart</h5>
                <ReactStars
    count={5}
   value="3"
    size={24}
    activeColor="#ffd700"
  />
                  <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>thih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing time </p>
                <p className="price">$555  </p>
               
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
              <Link><img src={ prodcompare}/></Link>
                <Link><img src={view}/></Link>
                <Link><img src={view}/></Link>
                
              </div>
            </div>
        </Link>
        
        </div>

         <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <div className="product-card position-relative">
          <div className='wishList-icon position-absolute'>
            <Link><img src={wish} alt="wishlist"></img></Link>
          </div>
            <div className="card-image">
                <img src={watch} alt="product" className="img-fluid"/>
               
                <img src={watch1} alt="product" className="img-fluid"/>
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product">kids heads phone amzing and smart</h5>
                <ReactStars
    count={5}
   value="3"
    size={24}
    activeColor="#ffd700"
  />
                  <p className={`description ${grid==12 ? "d-block" : "d-none"}`}>thih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing timethih is good watch and for use its amzing time </p>
                <p className="price">$555  </p>
               
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
              <Link><img src={prodcompare}/></Link>
                <Link><img src={cart}/></Link>
                <Link><img src={view}/></Link>
                
              </div>
            </div>
        </div>
        
        </div>
        
        </>
  )
}

export default Productcard