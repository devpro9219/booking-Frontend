import React, {Component} from 'react';
import { connect } from 'react-redux';
import { jumpTo } from 'actions';
import bem from 'bem-cn';
import logo from 'images/logo.svg';

const b = bem('header');

class Header extends Component {

    goToStart = () => {
        this.props.jumpTo();
    }

    render() {
        return(
            <div className={b()}>
                <a href='/'> <img alt='Geh an zu starten' className={b('logo')} src={logo} /></a>
            </div>
        )
    }
}

const mapState = state => {
    return {
        state
    }
}

export default connect(mapState, { jumpTo })(Header);
