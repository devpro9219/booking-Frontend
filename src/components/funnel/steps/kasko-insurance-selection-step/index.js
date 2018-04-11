
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, setSelection } from 'actions'
import bem from 'bem-cn';
import Boldstep from 'components/funnel/bold-step';
import SelectionFilter from 'components/funnel/selection-filter';
import insuranceTypes from 'data/insuranceTypes';
import logo from 'images/kasko-insurance-selection-step-icon.svg'

const b = bem('kasko-insurance-selection-step');

class KaskoInsuranceSelectionStep extends Component {

    constructor(props) {
        super(props);

        this.setKaskoInsurance = this.setKaskoInsurance.bind(this);
    }

    nextStep = () => {
        const { nextStep } = this.props;
        nextStep();
    }

    setKaskoInsurance(item) {
        this.props.setSelection({
            "kasko-insurance-selection": item.value
        });
    }

    render() {
        return (
        <div className={b()}>
            <Boldstep title="Wähle deine Schadenfreiheitsklasse für die KFZ-" title1="Volkasko" title2="-Versicherung">

                <div className={b('uber-link')}> <a href="#" className={b()}>überspringen ></a></div>

                <div className={b('12-text')}>
                    Bitte wähle überspringen falls du noch keine Schadenfreiheitsklasse für Vollkasko hast.<br/><br/>

                    Wir nutzen Deine Schadenfreiheitsklasse nur für die Ersteinstufung Deines Vertrags. Während der Laufzeit erhälst du den EMIL-Rabatt für unfallfrei gefahrene Kilometer. Im Falle eines Schadens fällt ein einheitlicher Schadenzuschlag an.<br/>
                    Für den Fall, dass Du EMIL einmal verlassen möchtest führen wir deine Schadenfreiheitsklasse im Hintergrund weiter und bestätigen diese dann Deiner neuen Versicherung.
                </div>

                <SelectionFilter list={insuranceTypes} currentStepId="kasko-insurance-selection" onSelect={this.setKaskoInsurance}/>
            </Boldstep>
        </div>
        )
    }
}

export default connect(null, { nextStep, setSelection })(KaskoInsuranceSelectionStep);
