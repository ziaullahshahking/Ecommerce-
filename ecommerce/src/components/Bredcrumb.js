import React from 'react'
import { Link } from 'react-router-dom'

const Bredcrumb = (props) => {
    const {title} = props;
  return (
    <div className='bredcrum mb-0 py-4'>
        <div className='container col-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center'><Link to="/" className='text-dark'> </Link>{title}</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bredcrumb