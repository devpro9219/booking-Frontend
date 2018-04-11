import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroHeader extends Component {
    render() {
        return(
            <header className="HeroHeader HeroHeader--claim">
                <div className="HeroHeader-container">
                    <div className="HeroHeader-content">
                        <h1 className="HeroHeader-title">Falls doch mal etwas passiert,
                            <br />sind wir für dich da!</h1>
                        <Link to="/angebot" className="Button Button--inlineBlock Button--blue">Beitrag berechnen</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeroHeader