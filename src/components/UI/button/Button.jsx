import React from 'react';
import style from './button.module.css'

export const Button = ({onClick, modifire, size = 's', children}) => {
    return ( 
        <button className={`${style.button} ${style[modifire]}` } onClick = {onClick}>
            {children}
        </button> 
    );
};