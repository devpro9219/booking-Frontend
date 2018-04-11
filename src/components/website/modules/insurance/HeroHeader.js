import React, { Component } from 'react'
import downArrow from '../../../../images/down-arrow.svg'
import scrollButton from '../../../../lib/scrollButton'

class HeroHeader extends Component {
    scrollHandler() {
        scrollButton.scroll()
    }
    render() {
        return(
            <header className="HeroHeader HeroHeader--insurance">
                <div className="HeroHeader-container">
                    <div className="HeroHeader-content">
                    <h1 className="HeroHeader-title">Wenig fahren - Wenig zahlen</h1>
                    <h2 className="HeroHeader-subTitle">Autofahrer, die durchschnittlich weniger als 200 km pro Woche fahren, können mit EMIL sparen. </h2>
                    <button className="Button js-getQuoteButton">Jetzt Beitrag berechnen</button>
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
