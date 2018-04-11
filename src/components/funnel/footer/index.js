import React, { Component } from 'react';
import {connect} from 'react-redux'

import bem from 'bem-cn';
import Step from 'components/funnel/step'

import gothaer from 'images/gothaer.png';
import norton from 'images/norton.png';
import tuvBadge from 'images/tuv-badge.png';
import tuv from 'images/tuv.png';
import Button from 'components/funnel/button';

const b = bem('funnel-footer');

class Footer extends Component {
    state = {
        hideFooter: false,
        secondselection: 'Ja'
    }
    constructor(props) {
        super(props);
    }
    render() {
        try {
            const {flow} = this.props;
            const stepsArray = flow.flows[flow.currentFlow].steps;
            this.state.hideFooter = stepsArray[flow.currentStepIndex] === 'offer-final-step' ||
                stepsArray[flow.currentStepIndex] === 'registration-final-step';
        } catch(e) {
            this.state.hideFooter = false;
        }
        if (this.state.hideFooter == true){
            return (
                <div></div>
            );
        } else {
            return (
                <footer className="funnel-footer">
                    <div className="container">
                        <ul className={b('badges')}>
                            <li><a href="#"><img className={b('gothaer')} src={gothaer} alt="Gothaer"/></a></li>
                            <li><a href="#"><img className={b('tuv')} src={tuv} alt="TUV"/></a></li>
                            <li><a href="#"><img className={b('norton')} src={norton} alt="Norton"/></a></li>
                        </ul>
                    </div>
                </footer>

            );
        }

    }

};
const mapState = state => ({flow: state});
export default connect(mapState, null)(Footer);