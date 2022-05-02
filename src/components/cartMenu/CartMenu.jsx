import React from 'react';
import { calcTotalPrice } from '../../utils';
import { CartItem } from '../cartItem/CartItem';
import { Button } from '../UI/button/Button';
import style from './cartMenu.module.css'


export const CartMenu = ({games, onClick}) => {
    return ( 
        <div className = {style.cartMenu}>
            <div className={style.gamsList}>
                {games.length > 0? games.map(game => <CartItem title = {game.title} image = {game.image} price = {game.price}/>): 'Корзина пуста'}
            </div>
            {
                games.length > 0
                ? 
                    <div className={style.arrange}>
                        <div className={style.totalPrice}>
                            <span>
                                Итого:
                            </span>
                            <span>
                                {calcTotalPrice(games)} руб
                            </span>

                            <Button modifire = 'primary' onClick={onClick}>Оформить заказ</Button>
                        </div>        
                    </div>
                :null
            }
        </div> 
    );
};

