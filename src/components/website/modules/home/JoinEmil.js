import React, { Component } from 'react'
import appScreenshot from '../../../images/join-emil/login-screenshot.png'

class JoinEmil extends Component {
    render() {
        return (
            <section className="JoinEmil">
                <div className="JoinEmil-container">
                    <div className="JoinEmil-img">
                        <img src={appScreenshot} alt="Overview screenshot of Emil App" />
                    </div>

                    <header className="ContentHeader">
                        <h1 className="ContentHeader-title">Join Emil</h1>
                        <h2 className="ContentHeader-subTitle">Better sooner than later.</h2>
                        <p className="ContentHeader-description">The road can be unpredictable.<br /> Emil helps take the guesswork out of driving with connected car technology that helps you stay in touch.</p>
                        <button className="Button Button--transparent js-getQuoteButton">Get Started</button>

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
                </div>
            </section>
        )
    }
}

export default JoinEmil