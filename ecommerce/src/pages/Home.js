import React from 'react'
import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom';
import Blogcard from '../components/Blogcard';
import Productcard from '../components/Productcard';
import Spicialproduct from '../components/Spicialproduct';
import Container from '../components/Container';
import { services } from "../Utils/Data";

const Home = () => {
  return (
    <>
    <Container></Container>
    <section className="home-wrapper-1 py-3">
      <div className="container col-xxl">
        <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative p-3">
            <img src="images/main-banner-1.jpg" className="img-fluid rounded-3"/>
            <div className="manin-banner-content position-absolute">
              <h4>Supercharged for pros</h4>
              <h5>ipad s13+pro</h5>
              <p>From $666 or $566</p>
              <Link className="button">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className="small-banner position-relative p-3">
            <img src="images/catbanner-01.jpg" className="img-fluid rounded-3"/>
            <div className="small-banner-content position-absolute">
              <h4>best sale</h4>
              <h5>ipad s13+pro</h5>
              <p>From $666 or $566</p>
           
            </div>
          </div>
          <div className="small-banner position-relative p-3">
            <img src="images/catbanner-02.jpg" className="img-fluid rounded-3"/>
            <div className="small-banner-content position-absolute">
              <h4>New Arrival</h4>
              <h5>Buy IPAD Air</h5>
              <p>From $666 or $566</p>
           
            </div>
          </div>
          <div className="small-banner position-relative p-3">
            <img src="images/catbanner-03.jpg" className="img-fluid rounded-3"/>
            <div className="small-banner-content position-absolute">
              <h4>best sale</h4>
              <h5>ipad s13+pro</h5>
              <p>From $666 or $566</p>
           
            </div>
          </div>
          <div className="small-banner position-relative p-3">
            <img src="images/catbanner-04.jpg" className="img-fluid rounded-3"/>
            <div className="small-banner-content position-absolute">
              <h4>best sale</h4>
              <h5>ipad s13+pro</h5>
              <p>From $666 or $566</p>
           
            </div>
          </div>
         
          
          

          

          </div>
          </div>
        </div>
     
      </div>
    </section>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    <section className="home-wrapper-2 py-5">
      <div className="container col-md ">
        <div className="row"> 
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap  align-items-center">
              <div className="d-flex  gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex  gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
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
            <h3 className="section-heading">Features Colections</h3>
          </div>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        </div>
      </div>
     


    </section>


    <section className='famous-wraper py-3 home-wrapper-2'>
      <div className='container col-xxl'>
        <div className='row'>
           <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-1.webp' className='img-fluid' alt='famous'/>
             <div className='famous-content position-absolute'>
             <h5>big screen </h5>
              <h6>smart watch series 7 </h6>
              <p>From $390 $16.62 for 24 mo</p>
             </div>
            </div>
           </div>
            
           <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.webp' className='img-fluid' alt='famous'/>
             <div className='famous-content position-absolute'>
             <h5 className='text-dark'>Studio Display </h5>
              <h6 className='text-dark'>600 nits of brightnes </h6>
              <p className='text-dark'>27 inch 5% Retina Display</p>
             </div>
            </div>
           </div>

           <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.webp' className='img-fluid' alt='famous'/>
             <div className='famous-content position-absolute'>
             <h5 className='text-dark'>Smart phone </h5>
              <h6 className='text-dark'>Smart phone 13 promix </h6>
              <p className='text-dark'>Now in green ,From $66& Or $554</p>
             </div>
            </div>
           </div>
           <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-4.webp' className='img-fluid' alt='famous'/>
             <div className='famous-content position-absolute'>
             <h5 className='text-dark'>Home speker </h5>
              <h6 className='text-dark'>Room filing sound </h6>
              <p className='text-dark'>Now in green ,From $66& Or $554</p>
             </div>
            </div>
           </div>


        </div>
      </div>

    </section>
    <section className="popular-wrapper py-5  home-wrapper-2">
      <div className="container col-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Spicial Products</h3>
          </div>
        </div>
        <div className="row">
          <Spicialproduct/>
          <Spicialproduct/>
          <Spicialproduct/>
          <Spicialproduct/>
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
        <Productcard/>
        <Productcard/>
        <Productcard/>
        </div>
      </div>
     


    </section>

    <section className="marque-wrapper- py-5">
       <div className="container col-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src="images/brand-01.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-02.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-03.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-04.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-05.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-06.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-07.png" alt="brand"/>
                </div>
                <div className="mx-4 w-25">
                <img src="images/brand-08.png" alt="brand"/>
                </div>

             
            </Marquee>
            </div>
          </div>
        </div>
       </div>
    </section>
    
   
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container col-xxl" >
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
       
        </div>
        <div className='row'>
          <div className='col-3'>
          <Blogcard/>
        </div>
        <div className='col-3'>
          <Blogcard/>
        </div>
        <div className='col-3'>
          <Blogcard/>
        </div>
        <div className='col-3'>
          <Blogcard/>
        </div>

        </div>
      </div>


    </section>
    
    </>
  )
}

export default Home