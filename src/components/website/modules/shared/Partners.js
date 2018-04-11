import React, { Component } from 'react';
import gothaer from '../../../../images/gothaer.png'
import datenschutz from '../../../../images/partners/Tuv.svg'
import nortonseal from '../../../../images/partners/imgnortonsiteseal.svg'

class Partners extends Component {
    render() {
        return (
            <div className="Partners">
                    <img src={gothaer} alt="Gothaer" className="gothaer" />
                <img src={datenschutz} alt="Datenschutz" className="Partners-image"/>
                <img src={nortonseal} alt="Nortonseal" className="Partners-image"/>

            </div>
        );
    }
}

export default Partners;