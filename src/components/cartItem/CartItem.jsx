import React from 'react'
import style from './cartItem.module.css'

export const CartItem = ({title, image, price}) => {
  return (
    <div className={style.cartItem}>
        <div className="">{title}</div>
        
        <p>{price}</p>
    </div>
  )
}
