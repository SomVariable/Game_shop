import React from 'react';
import { GameCover } from '../gameCover';
import GameGener from '../gameGener/GameGener';
import { GameBuy } from '../ganeBuy/GameBuy';
import style from './style.module.css'

export const GameItem = ({gameData}) => {
    const {image, title, description, genres, price, video} = gameData
    return ( 
        <div className={style.gameItem}>
            <GameCover image = {image}/>
            <div className = {style.details}>
                <span classNmae = {style.title}>{title}</span>
                <div className={style.genres}>
                    {genres.map(genre => <GameGener genre = {genre}/>)}
                </div>
                <div className="buy">
                    <GameBuy game = {gameData}/>
                </div>
            </div>
        </div>
    );
};