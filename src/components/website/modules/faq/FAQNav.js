import React, { Component } from 'react'
import about from 'images/faq/about.svg'
import policy from 'images/faq/policy.svg'
import claims from 'images/faq/claims.svg'
import telematic from 'images/faq/telematic.svg'
import app from 'images/faq/app.svg'

class FAQNav extends Component {
    constructor(props) {
        super(props)
        this.currentTab = this.props.currentTab
        this.changeTab = this.props.changeTab
    }
    render() {
        return(
            <nav className="FAQNav">
                <button onClick={() => this.changeTab('about')} className={`FAQNav-button js-FAQNav-button ${this.props.currentTab === 'about' ? 'is-active' : ''}`} data-topic="about">
                    <i className="FAQNav-buttonIcon">
                        <img src={about} alt="About" />
                    </i>
                    <span className="FAQNav-text">About</span>
                </button>
                <button onClick={() => this.changeTab('policy')} className={`FAQNav-button js-FAQNav-button ${this.props.currentTab === 'policy' ? 'is-active' : ''}`} data-topic="policy">
                    <i className="FAQNav-buttonIcon">
                        <img src={policy} alt="Policy" />
                    </i>
                    <span className="FAQNav-text">Policy</span>
                </button>
                <button onClick={() => this.changeTab('claims')} className={`FAQNav-button js-FAQNav-button ${this.props.currentTab === 'claims' ? 'is-active' : ''}`} data-topic="claims">
                    <i className="FAQNav-buttonIcon">
                        <img src={claims} alt="Claims" />
                    </i>
                    <span className="FAQNav-text">Claims</span>
                </button>
                <button onClick={() => this.changeTab('telematic')} className={`FAQNav-button js-FAQNav-button ${this.props.currentTab === 'telematic' ? 'is-active' : ''}`} data-topic="telematic">
                    <i className="FAQNav-buttonIcon">
                        <img src={telematic} alt="Telematic" />
                    </i>
                    <span className="FAQNav-text">Telematic</span>
                </button>
                <button onClick={() => this.changeTab('app')} className={`FAQNav-button js-FAQNav-button ${this.props.currentTab === 'app' ? 'is-active' : ''}`} data-topic="app">
                    <i className="FAQNav-buttonIcon">
                        <img src={app} alt="App" />
                    </i>
                    <span className="FAQNav-text">App</span>
                </button>
            </nav>
        )
    }
}

export default FAQNav
