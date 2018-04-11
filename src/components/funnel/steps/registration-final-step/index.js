import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'components/funnel/button';
import bem from 'bem-cn';
import { finalFormatter } from 'lib/signupFormatter';
import { jumpTo, registrationSuccess, registrationError, nextStep } from 'actions';
import gothaer from 'images/gothaer.png';
import norton from 'images/norton.png';
import tuv from 'images/tuv.png';
import axios from 'axios';
const b = bem('registration-final-step');
class RegistrationFinalStep extends Component {

    state = {
        checkboxes: {term_checkbox: false, preinsurance_termination_checkbox: false, payment_collection_auth_checkbox: false}
    }

    getCheckboxState = (index) => {
        let checkboxesobj = this.state.checkboxes
        let checkboxstate = Object.keys(checkboxesobj).map(function(e, key) {
            if (e == index) {
                return checkboxesobj[e];
            }
        })
        let return_value = false;
        for (var i = 0; i < 3; i ++){
            if (typeof checkboxstate[i] != 'undefined'){
                return_value = checkboxstate[i];
            }
        }
        return return_value;
    }

    toggleCheckboxIndex = (index, event) => {
        if(event.target.tagName === 'A') return;
        let checkboxes = this.state.checkboxes;
        Object.keys(checkboxes).map(function(e, key) {
            if (e == index) {
                checkboxes[e] = !checkboxes[e];
            }
        })
        this.setState({ checkboxes });
    }

    editData = (step) => {
        const { jumpTo, flow } = this.props;
        const stepIndex = flow.flows[flow.currentFlow].steps.indexOf(step);
        jumpTo(stepIndex);
    }

    formatInsuranceName = (insurance) => {
        return `${insurance.charAt(0)}${insurance.slice(1).toLowerCase()}`
    }

    formatInsurancePrice = (price) => {
        return price.toFixed(2);
    }

    formatKMPrice = (price) => {
        // divide price by 10 because the real math is / 1000 * 100 where the price is by 1000km in euro
        return (price / 10).toFixed(2);
    }

    submit = () => {
        let areCheckboxesChecked = true;
        let checkboxes = this.state.checkboxes;
        Object.keys(checkboxes).map(function(e, key) {
            if (checkboxes[e] == false) {
                areCheckboxesChecked = false;
            }
        })
        if(areCheckboxesChecked){
            const { selections } = this.props.flow;
            const formattedData = finalFormatter(selections);
            const { registrationSuccess, registrationError, nextStep } = this.props;
            
            axios.post('/sign_up', formattedData)
            .then(response => {
                registrationSuccess();
                // registrationError();
                nextStep();
            })
            .catch(err => {
                // registrationSuccess();
                registrationError();
                nextStep();
            });
        }else{
            alert('You must agree with the terms');
        }
    } 

    render() {
        const { selections, breadcrump, currentFlow, quote } = this.props.flow;
        const breadcrumpData = breadcrump[currentFlow];
        return (
            <div className={b()}>
                <div className={b('container')}>
                    <h3 className={b('title')}>Antrag auf PKW Kraftfahrtversicherung</h3>
                    <div className={b('left-column')}>
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Dein Fahrzeug</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Fahrzeug:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['car-model-selection'] && breadcrumpData['car-model-selection'].value}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('sub-options-1')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>HSN/TSN:</span>
                                <span className={b('data-set-value')}>{selections.vehicle_variant && `${selections.vehicle_variant.hsn}/${selections.vehicle_variant.tsn}`}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('sub-options-1')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Erstzulassung:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['car-registration-date-input'] && breadcrumpData['car-registration-date-input'].value}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('car-registration-date-input')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>FIN:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['current-insurance-info-vin'] && breadcrumpData['current-insurance-info-vin'].value}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('current-insurance-info-vin')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>kilometrestand:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['current-insurance-info-kilometrestand'] && breadcrumpData['current-insurance-info-kilometrestand'].value}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('current-insurance-info-kilometrestand')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Fahrer Alterspanne:</span>
                                <span className={b('data-set-value')}>{selections['additional-drivers-age-selection'] && `${selections['additional-drivers-age-selection'].startAge}-${selections['additional-drivers-age-selection'].endAge} Jahre`}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('additional-drivers-age-selection')}/>
                            </div>

                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Halter des Fahrzeugs:</span>
                                <span className={b('data-set-value')}>Versicherungsnehmer</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Nutzung:</span>
                                <span className={b('data-set-value')}>Überwiegend privat ohne Vermietung</span>
                            </div>

                        </div>
                        { (selections['insurance-selection'] && selections['kasko-insurance-selection']) &&
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Schadenfreiheitsklasse</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Schadenfreiheitsklasse Haftpflicht:</span>
                                <span className={b('data-set-value')}>{selections['insurance-selection']}</span> 
                                <span className={b('edit-data')} onClick={() => this.editData('insurance-selection')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Schadenfreiheitsklasse Volkasko:</span>
                                <span className={b('data-set-value')}>{selections['kasko-insurance-selection']}</span>
                                <span className={b('edit-data')} onClick={() => this.editData('kasko-insurance-selection')}/>
                            </div>

                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Vorschäden:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['first-selection'] && breadcrumpData['first-selection'].value}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Kündigung durch Vorversicherung:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['second-selection'] && breadcrumpData['second-selection'].value}</span>
                            </div>

                        </div>
                        }
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Derzeitige Versicherung</span>
                                <span className={b('edit-data')} onClick={() => this.editData('current-insurance-info-step')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Versicherungname:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['current-insurance-info-name'] && breadcrumpData['current-insurance-info-name'].value}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Versicherungsscheinnummer:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['current-insurance-info-number'] && breadcrumpData['current-insurance-info-number'].value}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Kennzeichen:</span>
                                <span className={b('data-set-value')}>{breadcrumpData['current-insurance-info-ken'] && breadcrumpData['current-insurance-info-ken'].value}</span>
                            </div>
                        </div>
                    </div>
                    <div className={b('right-column')}>
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Persönliche Daten</span>
                                <span className={b('edit-data')} onClick={() => this.editData('user-registration-step')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Name:</span>
                                <span className={b('data-set-value')}>{selections['user-registration-step'] && `${selections['user-registration-step'].first_name} ${selections['user-registration-step'].last_name}`}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Addresse:</span>
                                <span className={b('data-set-value')}>{selections['user-registration-step'] && `${selections['user-registration-step'].address.street} ${selections['user-registration-step'].address.house_number}, ${selections['user-registration-step'].address.zip_code} ${selections['user-registration-step'].address.city}`}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Telefonnummer:</span>
                                <span className={b('data-set-value')}>{selections['user-registration-step'] && `${selections['user-registration-step'].phone}`}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Geburtsdatum:</span>
                                <span className={b('data-set-value')}>{selections['user-registration-step'] && `${selections['user-registration-step'].birth_date.day}.${selections['user-registration-step'].birth_date.month}.${selections['user-registration-step'].birth_date.year}`}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Führerschein seit:</span>
                                <span className={b('data-set-value')}>{selections['user-registration-step'] && `${selections['user-registration-step'].grade_date.day}.${selections['user-registration-step'].grade_date.month}.${selections['user-registration-step'].grade_date.year}`}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>E-mail:</span>
                                <span className={b('data-set-value')}>{selections['login-registration-step'] && selections['login-registration-step'].email}</span>
                            </div>
                        </div>
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Zahlungsinformationen</span>
                                <span className={b('edit-data')} onClick={() => this.editData('banking-information-step')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Zahlweise:</span>
                                <span className={b('data-set-value')}>Lastschrift monatlich</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Fälligkeit:</span>
                                <span className={b('data-set-value')}>Grundbeitrag vorschlüssig,</span>
                                <span className={b('data-set-value')}>Kilometerbeitrag nachschüssig</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>IBAN:</span>
                                <span className={b('data-set-value')}>{selections['banking-information-step'] && selections['banking-information-step'].iban}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Kontoinhaber:</span>
                                <span className={b('data-set-value')}>{selections['banking-information-step'] && selections['banking-information-step'].account_name}</span>
                            </div>
                        </div>

                    </div>
                    <div className={b('clear')}></div>
                    <div className={b('data-set')}>
                        <div className={b('data-set-title-wrapper')}>
                            <span className={b('data-set-title')}>Dein gewählter Schutz</span>
                        </div>
                        <div className={b('data-set-group')}>
                            <span className={b('data-set-label')}>Versicherungspaket:</span>
                            <span className={b('data-set-value')}>{breadcrumpData['offer-final-spaket'] && breadcrumpData['offer-final-spaket'].value}</span>

                        </div>
                        <div className={b('data-set-group')}>
                            <span className={b('data-set-label')}>Versicherungssumme:</span>
                            <span className={b('data-set-value')}>100 Mio. € Versicherungssumme für Personen-, Sach- und Vermögensschäden (jedoch bei </span>
                            <span className={b('data-set-value')}>Personenschäden max. 15 Mio. € je geschädigte Person) je Schadenfall</span>
                        </div>
                        <div className={b('data-set-group')}>
                            <span className={b('data-set-label')}>Startdatum:</span>
                            <span className={b('data-set-value')}>{selections['current-insurance-info-step'] && `${selections['current-insurance-info-step'].start_date.day}.${selections['current-insurance-info-step'].start_date.month}.${selections['current-insurance-info-step'].start_date.year}`}</span>
                            <span className={b('edit-data')} onClick={() => this.editData('current-insurance-info-step')}/>
                        </div>
                        <div className={b('data-set-group')}>
                            <span className={b('data-set-label')}>Kaskoversicherung:</span>
                            <span className={b('data-set-value')}>{breadcrumpData['offer-final-insurance-only'] && breadcrumpData['offer-final-insurance-only'].value}</span>
                        </div>
                        <div className={b('data-set-group')}>
                            <span className={b('data-set-label')}>Selbstbeteiligung:</span>
                            <span className={b('data-set-value')}>{breadcrumpData['offer-final-insurance'] && breadcrumpData['offer-final-insurance'].value}</span>
                        </div>
                    </div>

                    <div className={b('clear')}></div>
                    <div className={b('prices')}>
                        <ul className={b('price-list')}>
                            <li>
                                <span>Grundbeitrag pro Monat</span>
                                <span>{this.formatInsurancePrice(quote.base_premium)} Euro</span>
                            </li>
                            <li>
                                <span>Kilometerbeitrag</span>
                                <span>{this.formatKMPrice(quote.per_1000_km_premium)} ct</span>
                            </li>
                        </ul>
                    </div>
                    <div className={b('legal')}>
                        <div className={b('checkbox')}>
                            <span className={b('checkbox-label-only')}>Die Informationen in diesem PDF Dokument sind für Deine Unterlagen bestimmt. Bitte lade es herunter und stimmen darunter dem Erhalt zu. Nach Antrangsstellung erhälst Du eine Kopie des von Dir gestellten Antrages per E-Mail.</span>
                        </div>
                        <div className={b('checkbox')} onClick={(e) => this.toggleCheckboxIndex('term_checkbox', e)}>
                            <span className={b('checkbox-square').state({checked: this.getCheckboxState('term_checkbox')})}></span>
                            <span className={b('checkbox-label')}>Ich habe das Informationsdokument heruntergeladen. Die Erklärungen und wichtigen Hinweise enthalten unter anderem die Belehrung zur vorvertraglichen Anzeigepflicht und zum Widerrufsrecht. Sie sind wichtiger Bestandteil des Vertrages. Ich mache die Erklärungen und wichtigen Hinweise zum Inhalt meines Antrages und bestätige die Richtigkeit der von mir gemachten Angaben. Ich bestätige, alle Dokumente heruntergeladen und gespeichert bzw. augedruckt zu haben.</span>
                        </div>
                        <div className={b('checkbox')} onClick={(e) => this.toggleCheckboxIndex('preinsurance_termination_checkbox', e)}>
                            <span className={b('checkbox-square').state({checked: this.getCheckboxState('preinsurance_termination_checkbox')})}></span>
                            <span className={b('checkbox-label')}>Hiermit bestätige ich, dass mir meine Vorversicherung nicht gekündigt wurde.</span>
                        </div>
                        <div className={b('checkbox')} onClick={(e) => this.toggleCheckboxIndex('payment_collection_auth_checkbox', e)}>
                            <span className={b('checkbox-square').state({checked: this.getCheckboxState('payment_collection_auth_checkbox')})}></span>
                            <span className={b('checkbox-label')}>Ich ermächtige EMIL, Zahlungen von meinem Konto mittels SEPA-Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von EMIL auf mein Konto gezogenen SEPA-Lastschriften einzulösen.</span>
                        </div>
                    </div>
                    <footer className="funnel-footer">
                        <div className="container">
                            <div className={b('final-offer')}>
                                <Button className={b('offer-button')} text='Jetzt beantragen' center onClick={this.submit}/>
                            </div>
                            <ul className={b('badges')}>
                                <li><a href="#"><img className={b('gothaer')} src={gothaer} alt="Gothaer"/></a></li>
                                <li><a href="#"><img className={b('tuv')} src={tuv} alt="TUV"/></a></li>
                                <li><a href="#"><img className={b('norton')} src={norton} alt="Norton"/></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        flow: state
    };
};

export default connect(mapStateToProps, { jumpTo, registrationSuccess, registrationError, nextStep })(RegistrationFinalStep);