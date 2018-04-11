
import React from 'react';
import bem from 'bem-cn';

const b = bem('step');

const Step = ({children, title}) => {

    return (
        <div className={b()}>
            <h2 className={b('title')}>{title}</h2>
            {children}
        </div>
    )
}

export default Step;
