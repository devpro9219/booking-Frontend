import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import downArrow from '../../../../images/down-arrow.svg'
import scrollButton from '../../../../lib/scrollButton'

class HeroHeader extends Component {
    scrollHandler() {
        scrollButton.scroll()
    }
    render() {
        return(
            <header className="HeroHeader HeroHeader--app">
                <div className="HeroHeader-container">
                    <div className="HeroHeader-content">
                        <h1 className="HeroHeader-title">Smarte Versicherung - Smarteres Auto
                        </h1>
                        <p className="HeroHeader-description">Alle Smart-Car Funktionen in deiner Hand. Jederzeit.</p>
                        <div className="HeroHeader-appLinks">
                            <a className="Button Button--apple" href="">App Store</a>
                            <a className="Button Button--gplay Button--alfa" href="">Google Play</a>
                        </div>
                    </div>

                    <button onClick={this.scrollHandler} className="ScrollButton ScrollButton--center js-ScrollButton">
                        <img src={downArrow} alt="Press to scroll" />
                    </button>
                </div>
            </header>
        )
    }
}

export default HeroHeader
