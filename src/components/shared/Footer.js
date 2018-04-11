import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/logo.svg';
import downArrow from 'images/down-arrow.svg';
import Velocity from 'velocity-animate';
import FunnelFooter from 'components/funnel/footer';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.scrollHandler = this.scrollHandler.bind(this)
    }
    scrollHandler() {
        Velocity(document.body, "scroll", {duration: 800, offset: "0", mobileHA: false});
    }
    componentDidMount() {
    }
    render(){
        return(
            <div>
                <footer className="MainFooter">
                    <div className="MainFooter-container">
                        <section className="MainFooter-content">
                            <button onClick={this.scrollHandler} className="ScrollButton ScrollButton--footer">
                                <img src={downArrow} alt="Press to scroll" />
                            </button>
                            <img className="MainFooter-logo" src={logo} alt="Emil" />
                            <Link to="/erstinformation" className="MainFooter-legalNavItem">Erstinformation</Link>
                            <Link to="/impressum" className="MainFooter-legalNavItem">Impressum</Link>
                            <Link to="/datenschutz" className="MainFooter-legalNavItem">Datenschutz</Link>
                            <p className="MainFooter-description">
                                Made with <span>&hearts; </span>in Berlin
                            </p>
                            <ul className="MainFooter-apps">
                                <li><a className="Button Button--transparent Button--apple" href="#">App Store</a></li>
                                <li><a className="Button Button--blue Button--gplay" href="#">Google Play</a></li>
                            </ul>
                            <nav className="MainFooter-nav">
                                <ul className="MainFooter-social">
                                    <li className="MainFooter-socialItem">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="MainFooter-socialLink">
                                            <i className="Icon Icon--facebook"></i>
                                        </a>
                                    </li>
                                    <li className="MainFooter-socialItem">
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="MainFooter-socialLink">
                                            <i className="Icon Icon--instagram"></i>
                                        </a>
                                    </li>
                                    <li className="MainFooter-socialItem">
                                        <a href="https://www.twiter.com" target="_blank" rel="noopener noreferrer" className="MainFooter-socialLink">
                                            <i className="Icon Icon--twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="MainFooter-websiteNav">
                                    <Link className="MainFooter-websiteNavItem" to='/versicherung'>Versicherung</Link>
                                    <Link className="MainFooter-websiteNavItem" to='/app'>App</Link>
                                    <Link className="MainFooter-websiteNavItem" to='/schaden'>Schadenservice</Link>
                                </div>
                            </nav>
                        </section>

                    </div>
                </footer>
                <FunnelFooter isHome={true} />
            </div>
        )
    }
}

export default Footer