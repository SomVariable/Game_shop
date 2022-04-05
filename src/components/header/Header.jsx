import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block';
import style from './style.module.css'

export const Header = () => {
    return ( 
        <div className={style.header}>
            <div className = {style.wrapper}>
                <Link to = '/' className={style.header__storeTitle}>Home page</Link>
            </div>
            <div className={`${style.wrapper} ${style.header__cartBtnWrapper}`}>
                <CartBlock/>
            </div>
            
        </div> 
    );
}