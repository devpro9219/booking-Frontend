import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.openMenu = this.openMenu.bind(this)
    }
    openMenu() {
        this.props.toggleHandler(true)
    }
    render(){
        return (
            <nav className="Menu js-Menu" id="menu">
                <ul className="Menu-list">
                    <li>
                        <NavLink activeClassName="is-active" className="Menu-item  Menu-item--home" to="/" exact><span>Startseite</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" className="Menu-item" to="/versicherung"><span>Versicherung</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" className="Menu-item" to="/app"><span>App</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" className="Menu-item" to="/schaden"><span>Schadenservice</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" className="Menu-item" to="/faq"><span>FAQ</span></NavLink>
                    </li>
                </ul>
                <Link to='/angebot' className="Button Button--transparent">Jetzt Beitrag berechnen</Link>
            </nav>
        )
    }
}

export default Menu