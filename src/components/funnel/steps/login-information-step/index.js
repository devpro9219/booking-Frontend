import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import bem from 'bem-cn';
import Joi from 'joi';
import { nextStep, setSelection, setBreadcrump } from 'actions';
import { loginInfoRules } from 'validations/funnel';
const b = bem('login-information-step');

class LoginInformationStep extends Component {
    constructor(props) {
        super(props);
        const { inputs } = props;

        if(inputs){
            const { password, password_confirm } = inputs;
            let passwords_match;
            if(password !== '') {
                passwords_match = password === password_confirm
            }else{
                passwords_match = null;
            }
            this.state = {
                ...inputs,
                passwords_match,
                errors: []
            }
        }else{
            this.state = {
                email: '',
                password: '',
                password_confirm: '',
                errors: [],
                passwords_match: null // null for nothing, false for error and true for green check
            };
        }
    }
    
    setEmail = (email) => {
        this.setState({ email });
    }

    setPassword = (password) => {
        this.setState({ password });
    }

    setPasswordConfirm = (password_confirm) => {
        this.setState({ password_confirm }, () => {
            const { password, password_confirm } = this.state;
        });
    }

    testPasswords = (password_confirm) => {
        this.setState({ password_confirm }, () => {
            const { password, password_confirm } = this.state;

            if(password !== '' && password_confirm !== ''){
                this.setState({
                    passwords_match: password === password_confirm
                });
            }else{
                this.setState({
                    passwords_match: null
                });
            }
        });
    }

    getPasswordMatchClass = (passwords_match) => {
        switch(passwords_match){
            case null:
                return '';
            case true:
                return 'success';
            case false:
                return 'error';
            default:
                return '';
        }
    }

    validate = (data, rules) => {
        return Joi.validate(data, rules, { abortEarly: false }).error;
    }

    addErrors = (errors) => {
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

    setBreadcrump = () => {
        const { setBreadcrump } = this.props;
        const { currentFlow, currentStepIndex } = this.props.flow;
        const currentStepId = this.props.flow.flows[currentFlow].steps[currentStepIndex];
        setBreadcrump({
            [currentFlow]: {
                [currentStepId]: {
                    value: 'Zugangsdaten'
                }
            }
        });
    }

    submit = () => {
        const selections = { ...this.state };
        delete selections.errors;
        delete selections.passwords_match;

        const validationResult = this.validate(selections, loginInfoRules);
        
        if(validationResult === null){
            
            this.props.setSelection({
                'login-registration-step': selections
            });
            this.setBreadcrump();
            this.props.nextStep();
            
        } else{
            this.addErrors(validationResult.details);
        }        
    }
    render() {
        return (
            <Step title='Zugangsdaten'>
                <div className={b('container')}>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('email')})}>
                            <input type="email" value={this.state.email} onChange={ e => { this.setEmail(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">E-mail</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('password')})}>
                            <input type="password" value={this.state.password} onChange={ e => { this.setPassword(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Passwort</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('password_confirm')}).mix(this.getPasswordMatchClass(this.state.passwords_match))}>
                            <input type="password" value={this.state.password_confirm} onChange={ e => { this.setPasswordConfirm(e.target.value) }} onBlur={ e => { this.testPasswords(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Passwort bestätigen</label>
                        </div>
                        { this.state.passwords_match === false && 
                          <p className={b('error-container')}>Die Passwörter stimmen nicht überein.</p>
                        }
                    </div>
                    <Button text='Weiter' center onClick={this.submit}/>
                </div>
            </Step>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputs: state.selections['login-registration-step'],
        flow: state
    };
};

export default connect(mapStateToProps, { nextStep, setSelection, setBreadcrump })(LoginInformationStep);