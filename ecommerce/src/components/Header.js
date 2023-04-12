import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import  {BsSearch} from "react-icons/bs";



const Header = () => {
  return (
   <>
   <header className="header-top-strip py-3">

    <div  className="container col-xxl">
      <div className="row">
        <div className=" col-6">
          <p className="text-white mb-0">Free shoping over $100 & free Returns</p>
        </div>
        <div className="col-6">
          <p className="text-end">
          <p className="text-white mb-0">HoTiine : <a  className="text-white" href="tel:+923160086801">923160086801</a> </p>
          </p>
          </div> 


      </div>

    </div>



   </header>
   <header className="header-upper py-3">
    <div className="container col-xxl">
      <div className="row align-items-center">
        <div className="col-2">
          <Link className="text-white">Developers.</Link>
        </div>
        <div className="col-5">
        <div className="input-group">
  <input type="text" class="form-control py-2" placeholder="Search Product... " aria-label="Search Product..." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-6"/></span>
  
  
 
</div>
        </div>
        <div className="col-5">
          <div className="header-upper-links d-flex align-items-center justify-content-between">
            <div>
              <Link to="/compare" className="d-flex align-items-center gap-10 text-white">
              <img src="images/compare.svg" alt="compare"/>
              <p className="mb-0">compare <br/>product</p>
              </Link>
            </div>
            <div>
            <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
            <img src="images/wishlist.svg" alt="wishlist"/>
              <p className="mb-0">Favourite <br/>WishLIst</p>
              </Link>
            </div>
            <div>
            <Link to="/login" className="d-flex align-items-center gap-10 text-white">
            <img src="images/user.svg" alt="wishlist"/>
              <p className="mb-0">LOgin<br/>Myaccount</p>
              </Link>
            </div>
            <div>
            <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
              <img src="images/cart.svg" alt="wishlist"/>
             <div className="d-flex flex-column">
              <span className="badge bg-white text-dark">0</span>
             </div>
              </Link>
             
            </div>
          </div>
        </div>

      </div>
    </div>
   </header>
   <header className=" header-bottom py-3">
    <div className="container col-xxl">
      <div className="row">
        <div className="col-12 ">
          <div className="menu-bottom d-flex align-items-center gap-30">
            <div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false gap-15 d-flex-align-items-center">
  <img  src="images/menu.svg"/><span className="me-5 d-inline-block">Show cattegories</span> 
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link to="/" className="dropdown-item text-white" href="#">Action</Link></li>
    <li><Link to="/"className="dropdown-item text-white" href="#">Another action</Link></li>
    <li><Link to="/" className="dropdown-item text-white" href="#">Something else here</Link></li>
  </ul>
</div>
            </div>
            <div className="menu-links">
              <div className="d-flex align-items-center gap-15">
                <NavLink className="text-white" to="/">Home</NavLink>
                <NavLink className="text-white" to="/store">Our Store</NavLink>
                <NavLink className="text-white" to="/blogs">Blogs</NavLink>
                <NavLink className="text-white" to="/contact">Contact</NavLink>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
   </header>
   </>
  )
}

export default Header