import React from 'react';
import { Link } from 'react-router-dom';

const GetAQuote = () => {
    return (
        <section className="GetAQuotePrimary">
            <h3 className="GetAQuote-title">In 5 einfachen Schritten zum Angebot</h3>
            <p className="GetAQuote-text">Finde heraus wieviel du mit EMIL sparen könntest!</p>
            <Link to="/angebot" className="Button Button--blue Button--inlineBlock">Jetzt Beitrag berechnen</Link>
        </section>
    );
};

export default GetAQuote;