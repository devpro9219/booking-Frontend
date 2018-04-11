import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class HeroHeader extends Component {
    render() {
        return(
            <header className="HeroHeader HeroHeader--faq">
                <div className="HeroHeader-container">
                    <div className="HeroHeader-content">
                        <h1 className="HeroHeader-title">Are you looking for answers?</h1>
                        <h2 className="HeroHeader-subTitle">Search below or simply ask us.</h2>
                        <Link to="/angebot" className="Button Button--inlineBlock Button--blue">Jetzt Beitrag berechnen</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeroHeader