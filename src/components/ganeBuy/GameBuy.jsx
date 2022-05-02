import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGameFromCart, setGameInCart } from '../../redux/cart/reducer';
import {Button} from '../UI/button/Button';
import style from './gameBuy.module.css'

export const GameBuy = ({game}) => {
    const {price} = game;
    const dispatch = useDispatch();
    const games = useSelector(state => state.cart.gamesInCart)
    const gameInTheCart = games.some(_game => _game.id === game.id)

    const setGame = (e) => {
        e.stopPropagation()
        dispatch(setGameInCart(game))
    }

    const deleteGame = (e) => {
        e.stopPropagation()
        dispatch(deleteGameFromCart(game.id))
    }

    return (
        <div className={style.gameBuy}>
            <span className={style.price}>{price}: price</span>
            <Button onClick={gameInTheCart?deleteGame:setGame} modifire = {gameInTheCart? "secondary":"primary"}> 
                {gameInTheCart? 'Удалить из корзины' : 'В корзину'} 
            </Button>
        </div>
    )
}