import React from 'react';
import { connect } from 'react-redux';
import { prevStep, jumpTo } from '../../../actions';
import bem from 'bem-cn';

const b = bem('breadcrumbs');
const BreadCrumbs = ({state, prevStep, jumpTo}) => {

    const getBreadcrump = () => {
        let prevStepValue = '';
        const { currentFlow, currentStepIndex, flows, breadcrump } = state;
        const prevStep = currentFlow ? flows[currentFlow].steps[currentStepIndex-1] : '';
        if(currentFlow && prevStep && breadcrump[currentFlow] && breadcrump[currentFlow][prevStep]) {
            prevStepValue = currentFlow && prevStep ? breadcrump[currentFlow][prevStep].value : '';
        }
        return prevStepValue;
    }
    const getBreadMargin = () => {
        const { currentFlow, currentStepIndex, flows, breadcrump } = state;
        return currentStepIndex === 0 ? '3.5%' : flows[currentFlow].steps.indexOf('offer-final-step') <= currentStepIndex ? '1.8%' : '3.5%';
    }
    return (
        <div className={b()} style={{marginTop: getBreadMargin()}}>
            <span className={b('button')} onClick={prevStep}/>
            <span className={b('button-text')} onClick={prevStep}> zurück</span>
        </div>
    );
};

const mapState = state => {
    return {
        state
    }
}

export default connect(mapState, {prevStep, jumpTo})(BreadCrumbs);