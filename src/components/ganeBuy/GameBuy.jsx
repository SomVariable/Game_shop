import React from 'react';
import Button from '../UI/button/Button';
import style from './gameBuy.module.css'

export const GameBuy = ({price}) => {
    return (
        <div className={style.gameBuy}>
            <span className={style.price}>{price}: price</span>
            <Button 
                onClick={() => console.log('+')}
                modifire = "primary"
                > 
                В корзину 
            </Button>
        </div>
    )
}