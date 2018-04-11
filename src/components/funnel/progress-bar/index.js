import React, {Component} from 'react';
import {connect} from 'react-redux';
import bem from 'bem-cn';

const b = bem('progress');
let currentNumber = 0;
class Header extends Component {
    calculateProgress = () => {

        const { flow } = this.props;
        console.log(flow);

        if(flow.currentStepIndex === 0){
            currentNumber = 1;
            return 20; // step 1 if first screen
        } 
        const stepsArray = flow.flows[flow.currentFlow].steps;
        const finalOfferIndex = stepsArray.indexOf('offer-final-step');
        return  flow.currentStepIndex > finalOfferIndex ? this.calculateSecondPartProgress(stepsArray, flow.currentStepIndex) : this.calculateFirstPartProgress(stepsArray, flow.currentFlow, flow.currentStepIndex);
    }

    decideAfterbarview = () => {
        const { flow } = this.props;    
        if(flow.currentStepIndex === 0) return 20; // step 1 if first screen
        const stepsArray = flow.flows[flow.currentFlow].steps;
        const finalOfferIndex = stepsArray.indexOf('offer-final-step');
        return  flow.currentStepIndex > finalOfferIndex ? '2px solid #FAD214' : '';
    }

    calculateFirstPartProgress = (stepsArray, currentFlow, currentStepIndex) => {
        console.log(currentFlow);
        console.log(currentStepIndex);

        let delimitationSteps = ['sub-options-1', 'car-selection', 'age-input-step', 'postal-code-input', 'insurance-selection'];
        if((currentFlow == 1 && currentStepIndex == 1) || (currentFlow == 3 && currentStepIndex == 2)) {
            delimitationSteps = ['sub-options-1', 'car-selection', 'age-input-step', 'postal-code-input', 'insurance-selection','step1'];
        }else if(currentFlow == 3 && currentStepIndex == 1){
            delimitationSteps = ['sub-options-1', 'car-selection', 'age-input-step', 'postal-code-input', 'insurance-selection','step1','step3'];    
        }
        if(currentFlow == 2 && currentStepIndex == 2){
            currentNumber =2;
            return 40;
        }
        const delimitationStepsB = ['sub-options-1', 'vehicle-registration-car-selection', 'age-input-step', 'postal-code-input', 'kasko-insurance-selection'];
        const rightSteps = currentFlow.indexOf('b') === -1 ? delimitationSteps : delimitationStepsB;
    
        let progress = 0;
        for(let i = 0; i < rightSteps.length; i++) {
            let step = rightSteps[i];            
            if(currentStepIndex >= stepsArray.indexOf(step)) {
                progress += 20;
            }
        }        
        currentNumber = progress / 20;
        return progress;

    }

    calculateSecondPartProgress = (stepsArray, currentStepIndex) => {
        const delimitationSteps = [
            'user-registration-step',
            'banking-information-step',
            'login-information-step',
            'current-insurance-info-step',
            'registration-final-step'
        ];

        const rightSteps = delimitationSteps;
        let progress = 0;
        for(let i = 0; i < rightSteps.length; i++) {
            let step = rightSteps[i];
            if(currentStepIndex >= stepsArray.indexOf(step)) {
                progress += 20;
            }
        }
        currentNumber = progress / 20;
        return progress + '%';
    }
    hideProgress = (stepsArray, currentStepIndex) => {
        return stepsArray[currentStepIndex] == 'final-step' ? 'none' : '';
    }

    hideProgressBar = (stepsArray, currentStepIndex) => {
        return stepsArray[currentStepIndex] === 'offer-final-step' ||
            stepsArray[currentStepIndex] === 'registration-final-step';
    }

    hideSteps = (stepsArray, currentStepIndex) => {
        return currentStepIndex === 0 ? false : stepsArray.indexOf('offer-final-step') < currentStepIndex;
    }

    render() {
        const { flow } = this.props;
        const stepsArray = flow.currentStepIndex !== 0 ? flow.flows[flow.currentFlow].steps : [];
        const currentStepIndex = flow.currentStepIndex;
        return(
            <div className={b()} style={{display: this.hideProgress(stepsArray, currentStepIndex)}}>
                <div className={b('bar').state({hidden: this.hideProgressBar(stepsArray, currentStepIndex)})} style={{width: this.calculateProgress(), border: this.decideAfterbarview()}}/>
                <ul className={b('steps').state({hidden: this.hideProgressBar(stepsArray, currentStepIndex) || this.hideSteps(stepsArray, currentStepIndex) })}>
                    <div className="number-parent-touched" style={{border: currentNumber > 1 ? 'none' : '' }}>
                        <div className="number-border-touched" style={{background: currentNumber > 1 ? '#06C3C3' : ''}}>
                            <div className="actual-number-touched" style={{color: currentNumber > 1 ? 'white' :''}}>1</div>
                            <div className="progress-bar-text-1">Ausgangssituation</div>
                        </div>
                    </div>
                    <div className={currentNumber >= 2 ? 'number-parent-touched' : 'number-parent'} style={{border: currentNumber > 2 ? 'none' : '' }}>
                        <div className={currentNumber >= 2 ? 'number-border-touched' : 'number-border'} style={{background: currentNumber > 2 ? '#06C3C3' : ''}}>
                            <div className={currentNumber >= 2 ? 'actual-number-touched' : 'actual-number'} style={{color: currentNumber > 2 ? 'white' :''}}>2</div>
                            <div className="progress-bar-text-2">Fahrzeuginformationen</div>
                        </div>
                    </div>
                    <div className={currentNumber >= 3 ? 'number-parent-touched' : 'number-parent'} style={{border: currentNumber > 3 ? 'none' : '' }}>
                        <div className={currentNumber >= 3 ? 'number-border-touched' : 'number-border'} style={{background: currentNumber > 3 ? '#06C3C3' : ''}}>
                            <div className={currentNumber >= 3 ? 'actual-number-touched' : 'actual-number'} style={{color: currentNumber > 3 ? 'white' :''}}>3</div>
                            <div className="progress-bar-text-3">Alter</div>
                        </div>
                    </div>
                    <div className={currentNumber >= 4 ? 'number-parent-touched' : 'number-parent'} style={{border: currentNumber > 4 ? 'none' : '' }}>
                        <div className={currentNumber >= 4 ? 'number-border-touched' : 'number-border'} style={{background: currentNumber > 4 ? '#06C3C3' : ''}}>
                            <div className={currentNumber >= 4 ? 'actual-number-touched' : 'actual-number'} style={{color: currentNumber > 4 ? 'white' :''}}>4</div>
                            <div className="progress-bar-text-4">Postleizahl</div>
                        </div>
                    </div>
                    <div className={currentNumber >= 5 ? 'number-parent-touched' : 'number-parent'} style={{border: currentNumber > 5 ? 'none' : '' }}>
                        <div className={currentNumber >= 5 ? 'number-border-touched' : 'number-border'} style={{background: currentNumber > 5 ? '#06C3C3' : ''}}>
                            <div className={currentNumber >= 5 ? 'actual-number-touched' : 'actual-number'} style={{color: currentNumber > 5 ? 'white' :''}}>5</div>
                            <div className="progress-bar-text-5">Versicherungshistorie</div>
                        </div>
                    </div>

                </ul>
            </div>
        )
    }
}

const mapState = state => ({flow: state});

export default connect(mapState, null)(Header);