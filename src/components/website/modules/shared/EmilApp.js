import React from 'react';
import { Link } from 'react-router-dom';
import emilapp from '../../../../images/insurance-facts/icon_ourapp.svg'

const EmilApp = () => {
    return (
        <section className="emilApp">
            <img className="emilapp-img" src={emilapp} alt="emilapp" />
            <p><Link to="/angebot" className="emilapp-link">Nicht zu vergessen sind alle Smart-Car Funktionen,<br/>die durch EMIL's App ermöglicht werden ></Link></p>
        </section>
    );
};

export default EmilApp;