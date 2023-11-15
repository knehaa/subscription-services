import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div classname='Item'>
      <p>{props.name}</p>
      <div classname="Item-prices">
        {props.price}
      </div>

    </div>
  )
}
