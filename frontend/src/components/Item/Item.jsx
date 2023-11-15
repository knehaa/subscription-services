import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div classname='Item'>
      <img src={props.image} alt=" "/>
      <p>{props.name}</p>
      {/* <div classname="Item-prices">
        {props.price}
      </div> */}

    </div>
  )
}

export default Item