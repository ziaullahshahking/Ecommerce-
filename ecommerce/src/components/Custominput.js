import React from 'react'

const Custominput = (props) => {
    const {type,name,placeholder,classname}=props
  return (
    <div className='mt-3'>
    <input type={type}  name={name} className={`form-control ${classname}`} placeholder={placeholder}/>

</div>
  )
}

export default Custominput