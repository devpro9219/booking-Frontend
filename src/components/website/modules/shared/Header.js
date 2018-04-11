import React, { Component } from 'react'
import Menu from './Menu'
import logo from '../../../../images/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolled: false,
            ticking: false
        }

        this.isScrolled = this.isScrolled.bind(this)
        this.setScrolled = this.setScrolled.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.isPurpleMenu = this.isPurpleMenu.bind(this)
    }
    isPurpleMenu () {
        return this.props.purpleMenu
    }
    isScrolled() {
        return Boolean(this.state.scrolled)
    }
    setScrolled(newScrolled) {
        this.setState({
            scrolled: newScrolled
        })
    }
    checkScroll() {
        const scrollPosition = window.scrollY
        const distance = 80
        if(!this.state.ticking){
            window.requestAnimationFrame(() => {
                let scrolled = scrollPosition > distance
                this.setState({
                    ticking: false,
                    scrolled
                })
            })
        }
        this.setState({
            ticking: true
        })
    }
    toggleMenu() {
        console.log('toggle menu')
        const body = document.querySelector('body')
        body.classList.toggle('menu-open')
        // lock scroll on mobile if menu is open
        if(body.classList.contains('menu-open')){
            const menu = document.getElementById('menu')
            menu.addEventListener('touchmove', (e) => {
                e.preventDefault()
                return false
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.checkScroll.bind(this))
    }
    render(){
        
        return(
            <header className={`MainHeader is-transparent ${this.isScrolled() ? 'is-scrolled' : '' } ${this.isPurpleMenu() ? 'is-purple' : '' }`}>
                <div className="MainHeader-container">
                    <a className="MainHeader-logo" href="/">
                    <img src={logo} alt="Emil" />
                    </a>

                    <button onClick={this.toggleMenu} className="MainHeader-menuButton js-MainHeader-menuButton">
                    <i className="MainHeader-menuButtonIcon"><i></i></i>
                    </button>

                    <Menu toggleHandler={this.props.toggleHandler}/>
                </div>
            </header>
        )
    }
}

export default Header