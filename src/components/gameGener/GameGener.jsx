import React from 'react';
import style from './gameGener.module.css'

function GameGener({genre}) {
    return ( 
    <span className={style.gameGenre}>
        {genre}
    </span> 
    );
}

export default GameGener;