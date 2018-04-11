import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import logoGothaer from '../../images/logo_gothaer.png'
import logoGenre from '../../images/logo_genre.png'


const Header = () => {
    return (
        <header className="heading-section wrp">
			<Link className="logo-img" to='/'>
				<img src={logo} alt="Emil Logo" />
			</Link>
			<div className="headings">
				<h1 className="page-title">Pay your miles</h1>
				<p className="page-subtitle">Why pay more if you drive less?
					With Emil you pay only for the miles you have driven. 
				</p>
				<Link to='/angebot' className="cta-btn">Get a quote</Link>
				<div className="logos-wrp">
					<img className="header-logo" src={logoGothaer} alt="Logo Gothaer" />
					<img className="header-logo" src={logoGenre} alt="Logo Genre" />
				</div>
			</div>
		</header>
    );
};

export default Header;