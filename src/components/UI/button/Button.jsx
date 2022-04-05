import React from 'react';
import style from './button.module.css'

function Button({onClick, type, modifire, size = 's', children}) {
    return ( 
        <button className={`${style.button} ${style[modifire]}` } onClick = {onClick}>
            {children}
        </button> 
    );
}

export default Button;