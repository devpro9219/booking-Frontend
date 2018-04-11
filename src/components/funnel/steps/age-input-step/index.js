import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, setSelection, setBreadcrump } from 'actions'
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import Joi from 'joi';
import { ageRules } from 'validations/funnel';
const b = bem('age-input-step');

class AgeInputStep extends Component {
    state = {
        errors: []
    }
    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        nextStep();
        setSelection({
            'age-input-step': {
                age: this.ageInput.value
            },
            'additional-drivers-age-selection': {
                startAge: this.startAge.value,
                endAge: this.endAge.value
            }
        })
        setBreadcrump({
            [currentFlow]: {
                'age-input-step': {
                    value: this.ageInput.value ? this.ageInput.value + ' Jahre' : ''
                },
                'additional-drivers-age-selection': {
                    value: this.startAge.value + ' - ' + this.endAge.value + ' Jahre'
                }
            }
        })
    };

    submit = () => {
        const data = {
            age: this.ageInput.value,
            min: this.startAge.value,
            max: this.endAge.value
        };

        const { error } = Joi.validate(data, ageRules, { abortEarly: false });

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
        window.scrollTo(0,0);
        const { selections } = this.props.flow;
        this.setState({...selections['age-input-step'], ...selections['additional-drivers-age-selection']});
    }

    render() {
        const { age, startAge, endAge } = this.state;
        return (
            <Step title="Dein alter:">
                <div className={b('container')}>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('age')})}>
                            <input
                                type="number"
                                min="17"
                                defaultValue={age}
                                placeholder="17"
                                ref={input => this.ageInput = input}/>
                        </div>
                        <span className={b('label')}>Jahre</span>
                    </div>
                    <h2 className="step__title">Altersspanne aller Fahrer:</h2>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('min')})}>
                            <input type="number"
                                   min="17"
                                   max="85"
                                   placeholder="17"
                                   ref={input => this.startAge = input}
                                   defaultValue={startAge}
                            />
                        </div>
                        <span>-</span>
                        <div className={b('input').state({error: this.hasError('max')})}>
                            <input type="number"
                                   min="17"
                                   max="85"
                                   placeholder="25"
                                   ref={input => this.endAge = input}
                                   defaultValue={endAge}
                            />
                        </div>
                        <span className={b('label')}>Jahre</span>
                    </div>
                    { this.hasErrors() &&
                    <div className={b('errors')}>
                        <p>Bitte überprüfe deine Eingabe.</p>
                    </div>
                    }
                    <Button text="Weiter" center onClick={this.submit}/>
                </div>
            </Step>
        )
    }
}

const mapState = state => ({flow: state});

export default connect(mapState, { nextStep, setSelection, setBreadcrump })(AgeInputStep);