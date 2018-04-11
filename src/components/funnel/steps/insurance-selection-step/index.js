import React, {Component} from 'react'
import {connect} from 'react-redux'
import { nextStep, setSelection } from 'actions'
import bem from 'bem-cn'
import BoldStep from 'components/funnel/step'
import SelectionFilter from 'components/funnel/selection-filter'
import insuranceTypes from 'data/insuranceTypes'
import logo from 'images/insurance-selection-step-icon.svg'
import Boldstep from "../../bold-step/index";

const b = bem('insurance-selection-step')


class InsuranceSelectionStep extends Component {

    constructor(props) {
        super(props);

        this.setInsurance = this.setInsurance.bind(this);
    }

    setInsurance(item) {
        this.props.setSelection({
            "insurance-selection": item.value
        });
    }

    render() {
        return (
            <div className={b()}>
                <Boldstep title="Wähle deine Schadenfreiheitsklasse für die " title1="Haftpflicht" title2="-Versicherung">
                    <div className={b('11-text')}>Wir nutzen Deine Schadenfreiheitsklasse nur für die Ersteinstufung Deines Vertrags. Während der Laufzeit erhälst du den EMIL-Rabatt für unfallfrei gefahrene Kilometer. Im Falle eines Schadens fällt ein einheitlicher Schadenzuschlag an.<br/>
                        Für den Fall, dass Du EMIL einmal verlassen möchtest führen wir deine Schadenfreiheitsklasse im Hintergrund weiter und bestätigen diese dann Deiner neuen Versicherung.<br/><br/>

                        Falls Du noch keine Schadenfreiheitsklasse hast wähle 0 aus, es sei denn Du besitzt seit mindestens 3 Jahren einen KFZ Führerschein aus dem Europäischen Wirtschaftsraum, dann wähle bitte SF1/2 aus.</div>
                    <SelectionFilter list={insuranceTypes} currentStepId="insurance-selection" onSelect={this.setInsurance}/>
                </Boldstep>
            </div>
        )
    }
}

export default connect(null, { nextStep, setSelection })(InsuranceSelectionStep);