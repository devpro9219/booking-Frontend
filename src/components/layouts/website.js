import React, { Component } from 'react';
import Header from '../website/modules/shared/Header'

class LayoutWebsite extends Component {
    render() {
        const content = this.props.children
        const purpleMenu = this.props.purpleMenu
        return (
            <div>
                <Header purpleMenu={purpleMenu}/>
                { content }
            </div>
        );
    }
}

export default LayoutWebsite;