
import React from 'react';
import bem from 'bem-cn';

const b = bem('button');

const Button = ({text, onClick, center}) => {
    return (
        <div className={b({}).mix(center ? 'center' : '')}>
            <span className={b('element')} onClick={onClick}>{text}</span>
        </div>
    )
}

export default Button;
