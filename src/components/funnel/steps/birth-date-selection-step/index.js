
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep } from '../../../../actions'
import bem from 'bem-cn';
import Step from '../../step';
const b = bem('car-engine-selection-step');

class CarEngineSelectionStep extends Component {
    nextStep = () => {
        const { nextStep } = this.props;
        nextStep();
    }

    render() {
        return (
            <Step title="Welchen Motor hast du?">
                <div className={b('filter')}>
                    This will be filter for car motor selection
                    <div onClick={this.nextStep}>NEXT STEP</div>
                </div>
            </Step>
        )
    }
}

export default connect(null, { nextStep })(CarEngineSelectionStep);
