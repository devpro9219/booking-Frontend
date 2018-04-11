import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import { setSelection, nextStep, setBreadcrump } from 'actions';
import { formatBankingInput } from 'lib/paymentServiceFormatter';
import { bankingInfoRules } from 'validations/funnel';
import Joi from 'joi';
import bem from 'bem-cn';
const b = bem('banking-information-step');

class BankingInformationStep extends Component {
    constructor(props) {
        super(props);

        if(props.inputs) {
            this.state = {
                ...props.inputs,
                errors: []
            };
        }else{
            this.state = {
                iban: '',
                account_name: '',
                errors: []
            };
        }
    }
    
    setIban = (iban) => {
        this.setState({ iban });
    }

    setAccountName = (account_name) => {
        this.setState({ account_name });
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
                    value: 'Zahlungsinformationen'
                }
            }
        });
    }

    submit = () => {

        const validationResult = this.validate(formatBankingInput(this.state), bankingInfoRules);

        if(validationResult === null){
            const selections = { ...this.state };
            delete selections.errors;
            this.props.setSelection({
                'banking-information-step': selections
            });
            this.setBreadcrump();
            this.props.nextStep();
            
        } else{
            this.addErrors(validationResult.details);
        }
    }

    render() {
        return (
            <Step title='Zahlungsinformationen'>
                <div className={b('container')}>
                    <div className={b('inputs')}>
                        <div className={b('input').state({error: this.hasError('iban') || this.hasError('iban_is_valid')})}>
                            <input type="text" placeholder="z.B. DE27100777770209299700" value={this.state.iban} onChange={e => { this.setIban(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">IBAN</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('account_name')})}>
                            <input type="text" value={this.state.account_name} onChange={e => { this.setAccountName(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Kontoinhaber</label>
                        </div>
                    </div>
                    <p className={b('disclaimer')}>Hiermit wird noch kein SEPA-Lastschrift Mandat erstellt. Dies geschieht erst, nachdem du den Versicherungsschutz beantragt hast.</p>
                    <Button text='Weiter' center onClick={this.submit}/>
                </div>
            </Step>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputs: state.selections['banking-information-step'],
        flow: state
    };
};

export default connect(mapStateToProps, { setSelection, nextStep, setBreadcrump })(BankingInformationStep);