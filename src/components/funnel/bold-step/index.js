
import React from 'react';
import bem from 'bem-cn';

const b = bem('step');

const Boldstep = ({children, title, title1, title2}) => {

    return (
        <div className={b()}>
            <h2 className={b('title')}>{title}<span className={b('title-bold')}>{title1}</span>{title2} </h2>
            {children}
        </div>
    )
}

export default Boldstep;
