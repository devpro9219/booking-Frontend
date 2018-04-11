
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, setSelection, setBreadcrump, openModal } from 'actions'
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import fromSample from 'images/form-sample.png';
import { vehicleManualRegistrationRules } from 'validations/funnel';
import Joi from 'joi';
import axios from 'axios';

const b = bem('vehicle-registration-car-selection-step');

class CarEngineSelectionStep extends Component {
    state = {
        errors: []
    }
    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        const selectionData = {
            month: this.monthInput.value,
            year: this.yearInput.value,
            hsn: this.hsnInput.value,
            tsn: this.tsnInput.value
        };
        nextStep();
        setSelection({
            'vehicle-registration-car-selection': selectionData
        })

        const bredcrumpValue = this.monthInput.value && this.yearInput.value
            ? (this.monthInput.value.length === 1 ? '0' + this.monthInput.value : this.monthInput.value) + '/' + this.yearInput.value
            : '';

        setBreadcrump({
            [currentFlow]: {
                'vehicle-registration-car-selection': {
                    value: 'BMW 156 4C (240 PS/176 KW)'
                },
                'car-registration-date-input': {
                    value: bredcrumpValue
                },
                'car-engine-selection': {
                    value: 'BMW 156 (Limousine) 4C (240 PS/176 KW)'
                }
            }
        })
    }

    submit = () => {
        const selectionData = {
            month: this.monthInput.value,
            year: this.yearInput.value,
            hsn: this.hsnInput.value,
            tsn: this.tsnInput.value
        };

        const { error } = Joi.validate(selectionData, vehicleManualRegistrationRules, { abortEarly: false });
        if(error === null) {
            axios.get('/json/variants',{
                params: {
                    hsn: selectionData.hsn,
                    tsn: selectionData.tsn
                }
            }).then(variant => {
                // TODO set variant selection
                this.nextStep();
            }).catch(err => {
                this.props.openModal('HSN_TSN');
            });
        }else{
            this.addValidationUI(error.details);
        }
    }

    addValidationUI = (errors) => {
        const errorPaths = errors.map(item => item.path);

        this.setState({
            errors: errorPaths
        });
    }

    hasError = (key) => {
        return this.state.errors.indexOf(key) !== -1;
    }

    componentWillMount() {
        const { selections } = this.props.flow;
        this.setState({...selections['vehicle-registration-car-selection']});
    }

    render() {
        const { month, year, hsn , tsn } = this.state;
        return (
            <Step title="Daten vom Fahrzeugschein">
                <div className={b({}).mix('container')}>

                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('month')})}>
                            <input type="number"
                                   min="1"
                                   max="12"
                                   step="1"
                                   placeholder="08"
                                   defaultValue={month}
                                   ref={input => this.monthInput = input}
                            />
                            <span className={b('label')}>Monat der Erstzulassung</span>
                        </div>

                        <div className={b('input').state({error: this.hasError('year')})}>
                            <input type="number"
                                   min="1900"
                                   max="2017"
                                   placeholder="2004"
                                   ref={input => this.yearInput = input}
                                   defaultValue={year}
                            />
                            <span className={b('label')}>Jahr der Erstzulassung</span>
                        </div>
                    </div>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('hsn')})}>
                            <input type="number"
                                   min="1"
                                   max="12"
                                   step="1"
                                   placeholder="7593"
                                   defaultValue={hsn}
                                   ref={input => this.hsnInput = input}
                            />
                            <span className={b('label')}>HSN (4-stellig)</span>
                        </div>

                        <div className={b('input').state({error: this.hasError('tsn')})}>
                            <input type="text"
                                   placeholder="AAW"
                                   ref={input => this.tsnInput = input}
                                   defaultValue={tsn}
                            />
                            <span className={b('label')}>TSN (3-stellig)</span>
                        </div>
                    </div>
                    { this.state.errors.length > 0 &&
                    <div className={b('errors')}>
                        <p>Bitte überprüfe deine Eingabe.</p>
                    </div>
                    }
                    <h2 className={b('subtitle')}>Hier findst du die Angaben im Fahrzeugschein:</h2>
                    <img alt='' className={b('form-sample')} src={fromSample}/>
                    <Button text="Weiter" center onClick={this.submit}/>
                </div>
            </Step>
        )
    }
}

const mapState = state => {
    return {
        flow: state
    }
}

export default connect(mapState, { nextStep, setSelection, setBreadcrump, openModal })(CarEngineSelectionStep);