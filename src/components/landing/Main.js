import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import iconComp from '../../images/icon_comp.png'
import iconDongle from '../../images/icon_dongle.png'
import iconPhone from '../../images/icon_phone.png'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }
    isCurrentTab(tab) {
        return this.state.activeTab === tab
    }
    setCurrentTab(tab) {
        this.setState({activeTab: tab})
    }
    render() {
        return (
            <section className="section-features">
                <div className="tabs-btn-wrp wrp">
                    <button onClick={ _ => this.setCurrentTab(0) } className={`tab-btn ${this.isCurrentTab(0) ? 'active' :''}`}>The Best insurance for Low Mileage</button>
                    <button onClick={ _ => this.setCurrentTab(1) } className={`tab-btn ${this.isCurrentTab(1) ? 'active' :''}`} >Easy and Fast Service</button>
                </div>
                <div className="tab-content-wrp">
                    <div className={`tab-item first-tab wrp ${this.isCurrentTab(0) ? 'active' : ''}`}>
                        
                            <div className="col-1-2 content-col">
                                <h2 className="feature-title">Drive less, pay less</h2>
                                <p className="feature-subtitle">
                                    Emil is the first car insurance in Germany that allows people to pay their premium based on the mileage they drive. Join Emil and enjoy the following benefits: 
                                </p>
                                <ul className="feature-list">
                                    <li className="list-item">Save up to 500 euro a year</li>
                                    <li className="list-item">No middle-man by using our app</li>
                                    <li className="list-item">Easy and fast file claim</li>
                                </ul>
                                <span className="link-more">Here you will find more information regarding our > <Link to='/versicherung'>car insurance</Link></span>
                            </div>
                            <div className="col-1-2 img-col"></div>
                    </div>
                    <div className={`tab-item second-tab wrp ${this.isCurrentTab(1) ? 'active' : ''}`}>
                        <h2 className="feature-title">Join Emil and start saving</h2>
                        <p className="feature-subtitle">Emil is easy as ABC, just a few steps and you are ready to go.</p>
                        <div className="steps-wrp grid">
                            <div className="col-1-3">
                                <img src={iconComp} alt="Emil Step 1" className="step-img" />
                                <h3 className="step-title">Sign up</h3>
                                <p className="step-subtitle">First step is to sign up through the website or web app. Simply click on the ‘Get a Quote’ button.</p>
                            </div>
                            <div className="col-1-3">
                                <img src={iconDongle} alt="Emil Step 2" className="step-img" />
                                <h3 className="step-title">Receive the dongle</h3>
                                <p className="step-subtitle">After you sign up and get an approval you will receive the welcome package with the Emil dongle inside. </p>
                            </div>
                            <div className="col-1-3">
                                <img src={iconPhone} alt="Emil Step 3" className="step-img" />
                                <h3 className="step-title">Download the app </h3>
                                <p className="step-subtitle">To get connected with your car, download the app and enjoy the smart car function.</p>
                            </div>
                        </div>
                        <Link to='/angebot' className="cta-btn">Get a quote</Link>	
                    </div>
                </div>
            </section>
        )
    }
}

export default Main;