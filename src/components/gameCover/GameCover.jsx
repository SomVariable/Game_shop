import React from 'react';
import style from './gameCover.module.css'

export const GameCover = ({image}) => {
    return (
        <div className = {style.gameCover} style = {{backgroundImage: `url(${image})`}}></div>
    )
} 