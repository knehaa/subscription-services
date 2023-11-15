import React from 'react'
import './services.css'
import data_product from '../assets/data'

const services = () => {
  return (
    <div classname='services'>
        <h3>Services offered</h3>
        <hr />
        <div classname="services">
            {data_product.map((item, i)=>{
                return <item key={i} id={item.id} name={item.name} image={item.image} />
            })}
        </div>

    </div>
  )
}
 export default services