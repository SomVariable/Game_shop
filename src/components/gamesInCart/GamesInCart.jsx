import React from 'react'
import style from './gamesInCart.module.css'

export default function GamesInCart({quantity = 0}) {
  return quantity > 0 && (
    <div className={style.gamesInCart}>
        {quantity}
    </div>
  )
}
