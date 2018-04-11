import React, { Component } from 'react'
import appScreenshot from '../../../../images/join-emil/overview-screenshot.png'
import { Link } from 'react-router-dom'

class JoinEmilCompanion extends Component {
    render() {
        return(
            <section className="JoinEmil JoinEmil--companion">
                <div className="JoinEmil-container">
                    <header className="ContentHeader">
                        <h1 className="ContentHeader-title">Dein nützlicher Begleiter</h1>
                        <h2 className="ContentHeader-subTitle">Direkt in deiner Tasche</h2>
                        <p className="ContentHeader-description">Die EMIL-App liefert nützliche Informationen rund um Dein Auto. Zahlreiche Features erleichtern Dir Deine Reise</p>

                        <Link className="Link Link--noUnderline Icon Icon--arrowAfter" to="/app">Explore the App</Link>

                        <div className="HeroHeader-appLinks">
                            <a className="Button Button--apple" href="">App Store</a>
                            <a className="Button Button--gplay Button--alfa" href="">Google Play</a>
                        </div>

                        <div className="ContentHeader-wrapper">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </header>

                    <div className="JoinEmil-img">
                        <img className="JoinEmil-img" src={appScreenshot} alt="Overview screenshot of Emil App" />
                    </div>
                </div>
            </section>
        )
    }
}

export default JoinEmilCompanion