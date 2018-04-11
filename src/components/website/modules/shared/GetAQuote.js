import React from 'react';
import { Link } from 'react-router-dom';

const GetAQuote = () => {
    return (
        <section className="GetAQuote">
            <div className="inside-GetAQuote">
            <h3 className="GetAQuote-title">In 5 einfachen Schritten zum Angebot</h3>
            <p className="GetAQuote-text">Finde jetzt heraus wieviel Du mit EMIL sparen könntest!</p>
            <Link to="/angebot" className="Button Button--blue Button--inlineBlock">Beitrag berechnen</Link>
            </div>
        </section>
    );
};

export default GetAQuote;