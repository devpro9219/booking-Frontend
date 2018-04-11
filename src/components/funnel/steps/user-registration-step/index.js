import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import bem from 'bem-cn';
import { nextStep, setSelection, setBreadcrump } from 'actions';
import { customerInputRules } from 'validations/funnel';

import Joi from 'joi';
const b = bem('user-registration-step');

class UserRegistrationStep extends Component {

    constructor(props) {
        super(props);

        if(props.inputs){
            this.state = {
                ...this.props.inputs,
                errors: []
            };
        }else{
            this.state = {
                gender: 'MR', // ['MR','MS']
                first_name: '',
                last_name: '',
                phone: '',
                birth_date: {
                    day: '',
                    month: '',
                    year: '',
                },
                grade_date: {
                    day: '',
                    month: '',
                    year: '',
                },
                address: {
                    street: '',
                    house_number: '',
                    zip_code: props.zip_code || '',
                    city: ''
                },
                errors: []
            };
        }

        
    }

    setGender = (gender) => {
        this.setState({ gender });
    }

    setFirstName = (first_name) => {
        this.setState({ first_name });
    }

    setLastName = (last_name) => {
        this.setState({ last_name });
    }

    setDayOfBirth = (day) => {
        this.setState({
            birth_date: {
                ...this.state.birth_date,
                day
            }
        });
    }

    setMonthOfBirth = (month) => {
        this.setState({
            birth_date: {
                ...this.state.birth_date,
                month
            }
        });
    }

    setYearOfBirth = (year) => {
        this.setState({
            birth_date: {
                ...this.state.birth_date,
                year
            }
        });
    }

    setDayOfGrade = (day) => {
        this.setState({
            grade_date: {
                ...this.state.grade_date,
                day
            }
        });
    }

    setMonthOfGrade = (month) => {
        this.setState({
            grade_date: {
                ...this.state.grade_date,
                month
            }
        });
    }

    setYearOfGrade = (year) => {
        this.setState({
            grade_date: {
                ...this.state.grade_date,
                year
            }
        });
    }

    setStreetAddress = (street) => {
        this.setState({
            address: {
                ...this.state.address,
                street,
            }
        });
    }

    setHouseNumber = (house_number) => {
        this.setState({
            address: {
                ...this.state.address,
                house_number,
            }
        });
    }

    setZipCode = (zip_code) => {
        this.setState({
            address: {
                ...this.state.address,
                zip_code,
            }
        });
    }

    setCity = (city) => {
        this.setState({
            address: {
                ...this.state.address,
                city,
            }
        });
    }

    setPhone = (phone) => {
        this.setState({ phone });
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
                    value: 'Persönliche Daten'
                }
            }
        });
    }

    submit = () => {
        const validationResult = this.validate(this.state, customerInputRules);

        this.setState({
            error:[]
        });
        let ValudationSt = true;
        let age =this.props.flow.breadcrump[1]['age-input-step']['value'];
        age = age.split(" ");
        age = age[0];
        
        age = Number((new Date()).getFullYear()) - age;
        let inputAgeYear= this.state.birth_date.year;
        let inputGradeYear = this.state.grade_date.year;   
        let errorsList = [];
        if(Number(age) != Number(inputAgeYear)){
            ValudationSt = false;
            errorsList.push('birth_date.year');            
        } 
        if((Number(age)+17) > Number(inputGradeYear)){
            ValudationSt = false;
            errorsList.push('grade_date.year');
        }


        if(validationResult === null && ValudationSt){
            const selections = { ...this.state };
            delete selections.errors;
            this.props.setSelection({
                'user-registration-step': selections
            });
            this.setBreadcrump();
            this.props.nextStep();
            
        } else{
            if(validationResult){
                if(!(validationResult === null)){            
                    this.addErrors(validationResult.details);
                }
                this.setState({
                    errors:[...this.state.errors,
                            ...errorsList]
                });
            }else{
                if(!(validationResult === null)){            
                    this.addErrors(validationResult.details);
                }
            }
            
        }        
    }
    render() {
        const { gender } = this.state;
        console.log(this.props);
        return (
            <Step title='Persönliche Daten'>
                <div className={b('container')}>
                    <div className={b('inputs')} >
                        <h3 className={b('title')}>Anrede</h3>
                        <div className={b('input')}>
                            <div className={b('radio')} onClick={() => this.setGender('MR')}>
                                <span className={b('radio-circle').mix(gender === 'MR' ? 'checked' : '')} />
                                <span className={b('radio-label')}>Herr</span>
                            </div>
                            <div className={b('radio')} onClick={() => this.setGender('MS')}>
                                <span className={b('radio-circle').mix(gender === 'MS' ? 'checked' : '')} />
                                <span className={b('radio-label')}>Frau</span>
                            </div>
                        </div>
                    </div>
                    <div className={b('inputs')}>

                        <h3 className={b('title')}>Name</h3>
                        <div className={b('input').state({error: this.hasError('first_name')})}>
                            <input type="text" value={this.state.first_name} onChange={ e => { this.setFirstName(e.target.value) } }/>
                            <label className={b('label')} htmlFor="">Vorname</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('last_name')})}>
                            <input type="text" value={this.state.last_name} onChange={ e => { this.setLastName(e.target.value) } }/>
                            <label className={b('label')} htmlFor="">Nachname</label>
                        </div>

                    </div>
                    <div className={b('inputs')}>
                        <div className={b('date-block')}>
                            <h3 className={b('title')}>Geburtsdatum</h3>
                            <div className={b('input').mix('date-container')}>
                                <div className={b('date-wrapper').state({error: this.hasError('birth_date.day')})}>
                                    <input type="text"
                                           placeholder="01"
                                           value={this.state.birth_date.day}
                                           onChange={ e => { this.setDayOfBirth(e.target.value) } } />
                                </div>
                                <div className={b('date-wrapper').state({error: this.hasError('birth_date.month')})}>
                                    <input type="text" placeholder="08" value={this.state.birth_date.month} onChange={ e => { this.setMonthOfBirth(e.target.value) } }/>
                                </div>
                                <div className={b('date-wrapper').mix('year').state({error: this.hasError('birth_date.year')})}>
                                    <input type="text" placeholder="1990" value={this.state.birth_date.year} onChange={ e => { this.setYearOfBirth(e.target.value) } } />
                                </div>
                            </div>
                        </div>
                        <div className={b('date-block')}>
                            <h3 className={b('title')}>Fuhrerschein Seit</h3>
                            <div className={b('input').mix('date-container')}>
                                <div className={b('date-wrapper').state({error: this.hasError('grade_date.day')})}>
                                    <input type="text"
                                           placeholder="01"
                                           value={this.state.grade_date.day}
                                           onChange={ e => { this.setDayOfGrade(e.target.value) } } />
                                </div>
                                <div className={b('date-wrapper').state({error: this.hasError('grade_date.month')})}>
                                    <input type="text" placeholder="08" value={this.state.grade_date.month} onChange={ e => { this.setMonthOfGrade(e.target.value) } }/>
                                </div>
                                <div className={b('date-wrapper').mix('year').state({error: this.hasError('grade_date.year')})}>
                                    <input type="text" placeholder="1990" value={this.state.grade_date.year} onChange={ e => { this.setYearOfGrade(e.target.value) } } />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={b('inputs')}>
                        <h3 className={b('title')}>Addresse</h3>
                        <div className={b('input').state({error: this.hasError('street')})}>
                            <input type="text" value={this.state.address.street} onChange={e => { this.setStreetAddress(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Straße</label>
                        </div>
                        <div className={b('input').mix('half-width').state({error: this.hasError('house_number')})}>
                            <input type="text" value={this.state.address.house_number} onChange={e => { this.setHouseNumber(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Hausnummer</label>
                        </div>
                        <div className={b('input').mix('half-width').state({error: this.hasError('zip_code')})}>
                            <input type="text" value={this.state.address.zip_code} onChange={e => { this.setZipCode(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Postleitzahl</label>
                        </div>
                        <div className={b('input').state({error: this.hasError('city')})}>
                            <input type="text" value={this.state.address.city} onChange={e => { this.setCity(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Stadt</label>
                        </div>
                    </div>
                    <div className={b('inputs')}>
                        <h3 className={b('title')}>Telefon</h3>
                        <div className={b('input').state({error: this.hasError('phone')})}>
                            <input type="text" value={this.state.phone} onChange={e => { this.setPhone(e.target.value) }}/>
                            <label className={b('label')} htmlFor="">Telefonnummer</label>
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
        zip_code: state.selections['postal-code-input'].postalCode,
        inputs: state.selections['user-registration-step'],
        flow: state
    };
};

export default connect(mapStateToProps, { nextStep, setSelection, setBreadcrump })(UserRegistrationStep);