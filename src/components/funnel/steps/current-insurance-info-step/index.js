import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import { nextStep, setSelection , setBreadcrump } from 'actions';
import { currentInputRules } from 'validations/funnel';
import bem from 'bem-cn';
import Dropdown from 'react-dropdown'
import Joi from 'joi';

const b = bem('current-insurance-info-step');
const options = [
    'AachenMünchener', 'ADAC', 'Adcuri',
    'Adler', 'AdmiralDirekt.de', 'AIG Europe',
    'Allianz', 'Allianz24', 'AllSecur',
    'Alte Leipziger Versicherung AG', 'ARAG Versicherungs AG', 'ASSTEL',
    'AXA easy', 'AXA Versicherung AG', 'Badische Allgemeine','Badischer Gemeinde-Versicherungs-Verband (BGV)','Barmenia','Barmenia Versicherungen','BarmeniaDirekt','Basler Securitas','BavariaDirekt','Bayerischer Versicherungsverband ','Bayrische Beamtenversicherung','BMW Financial Services','Bruderhilfe','CitroënVersicherungsdienst ','Concordia Versicherung','Condor Versicherung','Confidon','Continentale','CosmosDirekt','DA Direkt','Dacia','Daimler','DBV','Debeka ','Degenia','Deutsche Familienversicherung','DEVK Allgemeine Versicherung AG','DEVK Eisenbahn','Die Bayerische ','Direct Line Versicherung AG','ERGO Direkt','ERGO Versicherungsgruppe','EUROPA Sachversicherung AG','EUROPA-go','Fahrlehrerversicherung VaG','Feuersozietät Berlin Brandenburg','Fiat Versicherungsservice','GARANTA Versicherung','GEGENSEITIGKEIT Versicherung','Generali Versicherung','GHV Darmstadt','Gothaer Versicherung','Groupama Alsace','GVV Versicherung','GVV-Privatversicherung','Hannoversche Direktversicherung AG','Hanse Merkur','HDI','HDI Gerling','Helvetia Versicherung','Honda Versicherungsdienst','HUK-COBURG','INTERVersicherung','Itzehoer','Janitos Versicherung AG','KRAVAG','Kravag-Logistic','LSH Versicherung','Mannheimer Versicherung','Mecklenburgische Versicherung','Mercedes Versicherung','MLP','MÜNCHENER VEREIN','Versicherung','Nürnberger Beamten Versicherungen','NürnbergerVersicherung','Öffentliche Feuerversicherung Sachsen-Anhalt','Öffentliche Versicherung Braunschweig','Ontos Versicherung AG','Opel Händler Versicherungsservice','Optima Versicherung','ÖSA','Ovag','PAX','Peugeot Versicherungsservice','Prokundo','ProvinzialVersicherung','PVAG','R+V Versicherung','Renault Versicherungs-Service','RheinLand Versicherungen','rv24','Saarland Versicherungen','Signal IDUNA','SOVAG Versicherung','Sparkassen DirektVersicherung AG','Sparkassen Versicherung','Sparkassen-Versicherung Sachsen','ToyotaVersicherungsdienst','uniVersa Versicherungen','Vereinigte Postversicherung','Versicherungskammer Bayern','Verti','VGH','VHV Versicherungen','VÖDAG','Volksfürsorge','Volkswagen Versicherungsdienst','Volkswohl Bund Versicherungen','Volvo Auto Versicherung','VVD','WGV Himmelblau','WGV Versicherung','Württembergische','Gemeinde-Versicherung','ürttembergische','Versicherung AG','Wüstenrot & Württembergische',
    'WWK Versicherung', 'Zurich Versicherung'
];
const defaultOption = "";
class CurrentInsuranceInfoStep extends Component {
    state = {
    }
    constructor(props) {
        super(props);

        if(props.inputs) {
            this.state = {
                ...props.inputs,
                errors: []
            };
        }else{
            this.state = {
                start_date: {
                    day: '',
                    month: '',
                    year: ''
                },
                vin: '',
                kilometrestand: '',
                insurance_option: '',
                insurance_number: '',
                insurance_ken: '',
                errors: []
            };
        }
        this._onSelect = this._onSelect.bind(this);
    }
    _onSelect (option) {
        this.setState({insurance_option: option.label});
    }
    hasPreviousInsurance = () => {
        return this.props.previousInsurance;
    }

    setStartingDay = (day) => {
        this.setState({
            ...this.state,
            start_date: {
                ...this.state.start_date,
                day
            }
        });
    }
    setStartingMonth = (month) => {
        this.setState({
            ...this.state,
            start_date: {
                ...this.state.start_date,
                month
            }
        });
    }
    setStartingYear = (year) => {
        this.setState({
            ...this.state,
            start_date: {
                ...this.state.start_date,
                year
            }
        });
    }
    setVin = (vin) => {
        this.setState({ vin });
    }
    setKilo = (kilometrestand) => {
        this.setState({ kilometrestand });
    }
    setInsuranceNumber = (insurance_number) => {
        this.setState({ insurance_number });
    }
    setInsuranceKen = (insurance_ken) => {
        this.setState({ insurance_ken });
    }

    addErrors = (errors,arr) => {
        const errorPaths = errors.map(item => item.path);
        let temp = errorPaths.concat(arr);
        this.setState({
            errors: temp
        });
    }

    hasError = (key) => {
        return this.state.errors.indexOf(key) !== -1;
    }

    hasErrors = () => {
        return Boolean(this.state.errors.length > 0);
    }
    validate = (data, rules) => {
        return Joi.validate(data, rules, { abortEarly: false }).error;
    }
    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        nextStep();
        const {vin, insurance_number, insurance_option, insurance_ken ,kilometrestand } = this.state
        setBreadcrump({
            [currentFlow]: {
                'current-insurance-info-vin': {
                    value: vin
                },
                'current-insurance-info-name': {
                    value: insurance_option
                },
                'current-insurance-info-number': {
                    value: insurance_number
                },
                'current-insurance-info-ken': {
                    value: insurance_ken
                },
                'current-insurance-info-kilometrestand': {
                    value: kilometrestand
                }

            }
        })
    };
    addErrors = (errors,arr) => {
        const errorPaths = errors.map(item => item.path);
        let temp = errorPaths.concat(arr);
        this.setState({
            errors: temp
        });
    }

    submit = () => {
        const validationResult = this.validate(this.state, currentInputRules);

        let ValidationSt = true;
        let inputYear= this.state.start_date.year;
        let errorsList = [];

        if(Number(inputYear) < 2018){
            ValidationSt = false;
            errorsList.push('start_date.year');
        }
        if(validationResult === null && ValidationSt){

            const { nextStep, setSelection } = this.props;
            const { errors, ...inputs } = this.state;
            setSelection({
                'current-insurance-info-step': inputs
            });
            this.nextStep();
        } else{
            if(!ValidationSt){
                if(!(validationResult === null)){            
                    this.addErrors(validationResult.details,errorsList);
                }                
            }else{
                if(!(validationResult === null)){            
                    this.addErrors(validationResult.details,[]);
                }
            }
            
        }  
    }
    render() {
        return (
            <Step>
                <div className={b('container')}>

                    {this.hasPreviousInsurance() && <div className={b('inputs').mix(this.hasPreviousInsurance() ? 'half-width' : '')}>
                        <h3 className={b('title')}>Derzeitige Versicherung</h3>
                        <div className={b('input').state({error: this.hasError('insurance_option')})}>
                            <Dropdown options={options} onChange={this._onSelect} value={this.state.insurance_option} placeholder="Select..." />
                            <label className={b('label')} htmlFor="">Aktuelle Versicherung</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('insurance_number')})}>
                            <input type="text" value={this.state.insurance_number}
                                   onChange={ e => this.setInsuranceNumber(e.target.value) } />
                            <label className={b('label')} htmlFor="">Versicherungsscheinnummer</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('insurance_ken')})}>
                            <input type="text" value={this.state.insurance_ken}
                                   onChange={ e => this.setInsuranceKen(e.target.value) } />
                            <label className={b('label')} htmlFor="">Kennzeichen</label>
                        </div>   
                    </div>}
                    <div className={b('inputs').mix(this.hasPreviousInsurance() ? 'half-width' : '')}>
                        <h3 className={b('title')}>Dein Fahrzeug & Startdatum</h3>
                        <div className={b('input').state({error: this.hasError('vin')})}>
                            <input type="text" value={this.state.vin} onChange={ e => this.setVin(e.target.value) }/>
                            <label className={b('label')} htmlFor="">Fahrzeug-Identifizierungsnummer (FIN)</label>
                        </div> 
                        <div className={b('input').state({error: this.hasError('kilometrestand')})}>
                            <input type="text" value={this.state.kilometrestand} onChange={ e => this.setKilo(e.target.value) }/>
                            <label className={b('label')} htmlFor="">kilometrestand</label>
                        </div>                     
                        <div className={b('input').mix('date-container')}>
                            <div className={b('date-wrapper').state({error: this.hasError('start_date.day')})}>
                                <input type="text"
                                       placeholder="01"
                                       value={this.state.start_date.day}
                                       onChange={ e => { this.setStartingDay(e.target.value) } } />
                            </div>
                            <div className={b('date-wrapper').state({error: this.hasError('start_date.month')})}>
                                <input type="text" placeholder="08" value={this.state.start_date.month} onChange={ e => { this.setStartingMonth(e.target.value) } }/>
                            </div>
                            <div className={b('date-wrapper').mix('year').state({error: this.hasError('start_date.year')})}>
                                <input type="text" placeholder="1990" value={this.state.start_date.year} onChange={ e => { this.setStartingYear(e.target.value) } } />
                            </div>
                            <label className={b('label')} htmlFor="">Startdatum</label>
                        </div>
                    </div>
                    <Button text='Weiter' center onClick={this.submit}/>
                </div>
            </Step>
        );
    }
}

const mapStateToProps = state => {
    return {
        flow: state,
        inputs: state.selections['current-insurance-info-step'],
        previousInsurance: state.selections.previous_insurance
    };
};

export default connect(mapStateToProps, { nextStep, setSelection, setBreadcrump })(CurrentInsuranceInfoStep);