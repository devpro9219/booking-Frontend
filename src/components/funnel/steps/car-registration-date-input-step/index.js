
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, setSelection, setBreadcrump  } from 'actions'
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import Joi from 'joi';
import { carRegistrationRules } from 'validations/funnel';
const b = bem('car-registration-date-input-step');

class CarRegistrationDateInputStep extends Component {
    state = {
        errors: []
    }
    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        nextStep();
        setSelection({
            'car-registration-date-input': {
                month: this.monthInput.value,
                year: this.yearInput.value
            }
        })

        const bredcrumpValue = this.monthInput.value && this.yearInput.value
            ? (this.monthInput.value.length === 1 ? '0' + this.monthInput.value : this.monthInput.value) + '/' + this.yearInput.value
            : '';

        setBreadcrump({
            [currentFlow]: {
                'car-registration-date-input': {
                    value: bredcrumpValue
                }
            }
        })
    };

    submit = () => {
        const data = {
            month: this.monthInput.value,
            year: this.yearInput.value
        };

        const { error } = Joi.validate(data, carRegistrationRules, { abortEarly: false });

        if(error === null) {
            this.nextStep();
        } else {
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

    hasErrors = () => {
        return Boolean(this.state.errors.length > 0);
    }

    componentWillMount() {
        const { selections } = this.props.flow;
        this.setState({...selections['car-registration-date-input']});
    }

    render() {
        const { month, year } = this.state;
        return (
            <Step title="Wann wurde das Auto zum ersten Mal zugelassen?">
                <div className={b('container')}>
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
                            <span className={b('label')}>Monat</span>
                        </div>

                        <div className={b('input').state({error: this.hasError('year')})}>
                            <input type="number"
                                   min="1"
                                   max="2017"
                                   placeholder="2017"
                                   ref={input => this.yearInput = input}
                                   defaultValue={year}
                            />
                            <span className={b('label')}>Jahre</span>
                        </div>

                        { this.hasErrors() &&
                            <div className={b('errors')}>
                                <p>Bitte überprüfe deine Eingabe.</p>
                            </div>
                        }
                    </div>
                    <Button text="Weiter" center onClick={this.submit}/>
                </div>
            </Step>
        )
    }
}

const mapState = state => ({flow: state});

export default connect(mapState, { nextStep, setSelection, setBreadcrump })(CarRegistrationDateInputStep);
