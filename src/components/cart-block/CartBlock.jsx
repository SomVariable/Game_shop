import React from "react"
import style from "./style.module.css"
import {BiCartAlt} from 'react-icons/bi'

export const CartBlock = (props) => {
    return (
        <div className={style.cartBlock}>
            <BiCartAlt size = {30} className={style.icon}/>
            <span className={style.totalPrice}>123 price</span>
        </div>
    )
}