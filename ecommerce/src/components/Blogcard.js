import React from 'react'
import { Link } from 'react-router-dom'

const blogcard = () => {
  return (
   <>
       
        <div className="blog-card">
            <div className="card-image cls">
                <img src="images/blog-1.jpg  " className="img-fluid w-70"/>
            </div>
            <div className="blog-content">
                <p className="date">2/13/2023</p>
                <h5 className="title">Beautiful Morning renaissance</h5>
                <p className="decs"> Lorem  Lorem Lorem Lorem Lorem LoremLorem Lorem  </p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
        
      
        
    
        </>
  )
}

export default blogcard