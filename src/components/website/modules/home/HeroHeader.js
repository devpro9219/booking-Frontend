import React, { Component } from 'react'
import downArrow from '../../../../images/down-arrow.svg'
import scrollButton from '../../../../lib/scrollButton'
import homeVideo from '../../../../images/home-video.mp4'
import { Link } from 'react-router-dom'

class HeroHeader extends Component {
    scrollHandler() {
        scrollButton.scroll()
    }
    render() {
        return(
            <header className="HeroHeader HeroHeader--home">
                <div className="HeroHeader-container">
                    <div className="HeroHeader-content">
                        <h1 className="HeroHeader-title">Kfz-Versicherung Neu Erleben </h1>
                        <p className="HeroHeader-description">Zahle pro gefahrenem Kilometer. Spare hierdurch bis zu 450€ im Jahr und verleihe deinem Auto <br/>nützliche Smart-Car Funktionen. Fortschrittliche Telematik-Technologie macht es möglich.</p>
                       <Link to='/angebot' className="Button Button--inlineBlock">Beitrag berechnen</Link>
                    </div>

                    <button onClick={this.scrollHandler} className="ScrollButton ScrollButton--center js-ScrollButton">
                        <img src={downArrow} alt="Press to scroll" />
                    </button>
                </div>

                <div className="HeroHeader-videoBg">
                    <video className="HeroHeader-video" autoPlay loop muted>
                        <source src={homeVideo} type="video/mp4" />
                    </video>
                </div>
            </header>
        )
    }
}

export default HeroHeader