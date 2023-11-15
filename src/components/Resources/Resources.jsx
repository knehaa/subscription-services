import React from 'react'
import './Resources.css'
import data_product from '../assets/data'

const resources = () => {
  return (
    <div classname='services'>
        <h3>Resources offered</h3>
        <hr />
        <div classname="services">
            {data_product.map((Item, i)=>{
                return <item key={i} id={Item.id} name={Item.name} image={Item.image} />
            })}
        </div>

    </div>
  )
}
 export default resources