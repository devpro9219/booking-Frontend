
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep,setSelection, setBreadcrump } from 'actions';
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import Joi from 'joi';
import { postalCodeRules } from 'validations/funnel';
const b = bem('postal-code-input-step');

class PostalCodeInputStep extends Component {
    state = {
        errors: []
    }
    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        nextStep();
        setSelection({'postal-code-input': { postalCode: this.postalCode.value}})
        setBreadcrump({
            [currentFlow]: {
                'postal-code-input': {
                    value: this.postalCode.value ? 'PLZ ' + this.postalCode.value : ''
                }
            }
        })
    };

    submit = () => {
        const data = {
            postalCode: this.postalCode.value
        };

        const { error } = Joi.validate(data, postalCodeRules, { abortEarly: false });

        if(error === null) {
            this.nextStep();
        } else {
            this.addValidationUI(error.details);
        }
    };

    addValidationUI = (errors) => {
        const errorPaths = errors.map(item => item.path);
        
        this.setState({
            errors: errorPaths
        });
    };

    hasError = (key) => {
        return this.state.errors.indexOf(key) !== -1;
    };

    hasErrors = () => {
        return Boolean(this.state.errors.length > 0);
    };

    componentWillMount() {
        const { selections } = this.props.flow;
        this.setState({...selections['postal-code-input']});
    }

    render() {
        const { postalCode } = this.state;
        return (
            <Step title="Wie lautet deine Postleitzahl?">
                <div className={b('container')}>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('postalCode')})}>
                            <input type="number"
                                   min="0"
                                   placeholder="13357"
                                   defaultValue={postalCode}
                                   ref={input => this.postalCode = input}
                            />
                        </div>
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

export default connect(mapState, { nextStep, setSelection, setBreadcrump })(PostalCodeInputStep);
