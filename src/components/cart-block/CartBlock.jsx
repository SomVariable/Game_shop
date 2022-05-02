import React, { useState } from "react"
import style from "./style.module.css"
import {BiCartAlt} from 'react-icons/bi'
import { useSelector } from "react-redux"
import { calcTotalPrice } from "../../utils"
import { CartMenu } from "../cartMenu/CartMenu"
import GamesInCart from "../gamesInCart/GamesInCart"

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const games = useSelector((state) => state.cart.gamesInCart)
    const totalPrice = calcTotalPrice(games)

    return (
        <div className={style.cartBlock}>
            <GamesInCart quantity={games.length}/>
            <BiCartAlt size = {30} 
                       className={style.icon} 
                       onClick = {() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            <span className={style.totalPrice}>{totalPrice} price</span>
            {isCartMenuVisible && <CartMenu games = {games} onClick = {() => null}/>}
        </div>
    )
}