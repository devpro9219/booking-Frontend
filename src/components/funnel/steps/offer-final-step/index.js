import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputSlider from 'react-input-slider';
import Button from 'components/funnel/button';
import { nextStep, jumpTo, calculateQuote, openModal, setSelection, setBreadcrump } from 'actions';
import bem from 'bem-cn';
import formatQuoteData from 'lib/insuranceCalculationFormatter';
import gothaer from 'images/gothaer.png';
import norton from 'images/norton.png';
import tuv from 'images/tuv.png';
const b = bem('offer-final-step');

class OfferFinalStep extends Component {
    state = {
        rangeSliderValue: 3000,
        insurance: 'TEILKASKO',
        plan: undefined,
        total: 0,
        schutzbrief: '',
        fahrerschutz: '',
        spaket: '',
        base_premium_Teil: '',
        base_premium_Kasko: '',
        per_1000_km_premium_Teil: '',
        per_1000_km_premium_Kasko: '',
        is_first_loading: false
    }

    nextStep = () => {
        const { nextStep } = this.props;
        nextStep();
    }

    editData = step => {
        const { jumpTo, flow } = this.props;
        const stepIndex = flow.flows[flow.currentFlow].steps.indexOf(step);
        jumpTo(stepIndex);
    }

    handleChange = (pos) => {
        const kms = Math.floor(pos.x)
        this.setState({
            rangeSliderValue: kms,
            total: this.calculateTotal(this.props.flow.quote, kms)
        });
    }

    handleInsuranceChange = (insurance) => {
        this.setState({ insurance }, function(){
            this.calculateQuote();
        });
    }

    setSchutzbrief = (schutzbrief) => {
        if (schutzbrief == true){
            this.setState({schutzbrief: 'Schutzbrief'});
        } else {
            this.setState({schutzbrief: ''});
        }
    }

    setFahrerschutz = (fahrerschutz) => {
        if (fahrerschutz == true){
            this.setState({fahrerschutz: 'Fahrerschutz'});
        } else {
            this.setState({fahrerschutz: ''});
        }
    }

    submit = () => {
        const { insurance } = this.state;
        const { setSelection, setBreadcrump } = this.props;
        const { currentFlow, currentStepIndex } = this.props.flow;
        const currentStepId = this.props.flow.flows[currentFlow].steps[currentStepIndex]

        setSelection({ insurance });

        if (this.state.schutzbrief != '' && this.state.fahrerschutz != '') {
            this.state.spaket = this.state.schutzbrief + ' und ' + this.state.fahrerschutz
        } else {
            this.state.spaket = this.state.schutzbrief + '' + this.state.fahrerschutz
        }

        this.state.spaket = this.state.spaket != '' ? 'Haftpflicht mit ' + this.state.spaket : '';
        this.nextStep();

        setBreadcrump({
            [currentFlow]: {
                [currentFlow]: {
                    [currentStepId]: {
                        value: 'Angebot Überblick'
                    }
                },
                'offer-final-spaket': {
                    value: this.state.spaket
                },
                'offer-final-insurance': {
                    value: this.state.insurance == 'TEILKASKO' ? '150 € (Teilkasko)' : '300 € (Vollkasko) '
                },
                'offer-final-insurance-only': {
                    value: this.state.insurance
                },
                'offer-final-base-teil': {
                    value: this.state.base_premium_Teil
                },
                'offer-final-base-kasko': {
                    value: this.state.base_premium_Kasko
                },
                'offer-final-per-teil': {
                    value: this.state.per_1000_km_premium_Teil
                },
                'offer-final-per-kasko': {
                    value: this.state.per_1000_km_premium_Kasko
                }
            }
        });
    }

    calculateQuote = (ins = null) => {

        const quoteData = formatQuoteData({
            ...this.props.flow.selections,
            insurance: !!ins ? ins : this.state.insurance
        });

        this.props.calculateQuote(quoteData);
    }

    calculateTotal = (quote, kms) => {
        const {base_premium: base, per_1000_km_premium: additional} = quote;
        const formattedBase = parseFloat(this.formatInsurancePrice(base));
        const formattedKM = parseFloat(this.formatKMPrice(additional))
        const total = formattedBase + ( (formattedKM / 100) * (kms / 12));

        return total.toFixed(2);
    }

    formatInsurancePrice = (price) => {
        if (typeof price != 'undefined')
            return price.toFixed(2)
    }

    formatKMPrice = (price) => {
        // divide price by 10 because the real math is / 1000 * 100 where the price is by 1000km in euro
        return (price / 10).toFixed(2);
    }

    openModal = (id) => {
        this.props.openModal(id);
    }

    componentDidMount() {
        this.calculateQuote();
        if(!!this.state.base_premium_Kasko) {
            this.handleInsuranceChange("KASKO");
            setTimeout(function (This) {
                This.handleInsuranceChange("TEILKASKO");
            }, 200, this);
        }
    }

    componentWillMount(){
        if (this.state.base_premium_Teil != ''){
            const { insurance, base_premium_Kasko, per_1000_km_premium_Kasko, base_premium_Teil, per_1000_km_premium_Teil } = this.state;
        } else {
            const { flow } = this.props;
            const data = flow.breadcrump[flow.currentFlow];

            if (data['offer-final-insurance-only']){
                this.setState({
                    insurance: data['offer-final-insurance-only'].value,
                    base_premium_Kasko: data['offer-final-base-kasko'].value,
                    base_premium_Teil: data['offer-final-base-teil'].value,
                    per_1000_km_premium_Kasko: data['offer-final-per-kasko'].value,
                    per_1000_km_premium_Teil: data['offer-final-per-teil'].value
                })
            }
        }
    }

    componentWillReceiveProps(newProps) {
        const quote = newProps.flow.quote;

        if(quote){
            this.setState({
                total: this.calculateTotal(quote, this.state.rangeSliderValue)
            });
        }

        const {base_premium, per_1000_km_premium} = quote;
        if (this.state.insurance == 'TEILKASKO'){

            if (this.state.is_first_loading == true){
                // swap kasko with teil
                let temp_base = this.state.base_premium_Kasko;
                let temp_per = this.state.per_1000_km_premium_Kasko;
                this.setState({
                    base_premium_Teil: temp_base,
                    per_1000_km_premium_Teil: temp_per,
                    is_first_loading: false
                });
                this.setState({
                    base_premium_Kasko: base_premium,
                    per_1000_km_premium_Kasko: per_1000_km_premium
                });

                const { insurance } = this.state;
                const { setSelection, setBreadcrump } = this.props;
                const { currentFlow, currentStepIndex } = this.props.flow;
                const currentStepId = this.props.flow.flows[currentFlow].steps[currentStepIndex]
                setBreadcrump({
                    [currentFlow]: {
                        [currentFlow]: {
                            [currentStepId]: {
                                value: 'Angebot Überblick'
                            }
                        },
                        'offer-final-insurance-only': {
                            value: this.state.insurance
                        },
                        'offer-final-base-teil': {
                            value: temp_base
                        },
                        'offer-final-base-kasko': {
                            value: base_premium
                        },
                        'offer-final-per-teil': {
                            value: temp_per
                        },
                        'offer-final-per-kasko': {
                            value: per_1000_km_premium
                        }
                    }
                });

                const quoteData1 = formatQuoteData({
                    ...this.props.flow.selections,
                    insurance: 'TEILKASKO'
                });

                this.props.calculateQuote(quoteData1);

            } else {
                this.setState({
                    base_premium_Teil: base_premium,
                    per_1000_km_premium_Teil: per_1000_km_premium
                });
            }

            // first loading
            if (this.state.base_premium_Kasko === ''){

                const quoteData = formatQuoteData({
                    ...this.props.flow.selections,
                    insurance: 'KASKO'
                });

                this.props.calculateQuote(quoteData);

                this.setState({
                    base_premium_Kasko: base_premium,
                    per_1000_km_premium_Kasko: per_1000_km_premium,
                    is_first_loading: true
                });
            }

        } else {
            this.setState({
                base_premium_Kasko: base_premium,
                per_1000_km_premium_Kasko: per_1000_km_premium
            });
        }
    }

    render() {
        const { insurance, base_premium_Kasko, per_1000_km_premium_Kasko, base_premium_Teil, per_1000_km_premium_Teil } = this.state;
        const { flow } = this.props;
        const data = flow.breadcrump[flow.currentFlow];

        return (
            <div className={b()}>
                <div className={b('left-column')}>
                    <br /><br />
                    <h2 className={b('title')}>&Uuml;berblick &lt;Versicherungswechsel/Erstversicherung&gt;</h2>
                    { data && <div className={b('data-selection')}>
                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Dein Fahrzeug</span>
                                <span className={b('edit-data')} onClick={() => this.editData('sub-options-1')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Fahrzeug:</span>
                                <span className={b('data-set-value')}>{data['car-engine-selection'] && data['car-engine-selection'].value
                                }</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>HSN/TSN:</span>
                                <span className={b('data-set-value')}>{flow.selections.vehicle_variant.hsn}/{flow.selections.vehicle_variant.tsn}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Erstzulassung:</span>
                                <span className={b('data-set-value')}>{data['car-registration-date-input'] && data['car-registration-date-input'].value
                                }</span>
                            </div>
                        </div>

                        <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Persönliche Angaben</span>
                                <span className={b('edit-data')} onClick={() => this.editData('age-input-step')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Dein Alter:</span>
                                <span className={b('data-set-value')}>{data['age-input-step'] && data['age-input-step'].value
                                }</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Fahrer Alterspanne:</span>
                                <span className={b('data-set-value')}>{data['additional-drivers-age-selection'] && data['additional-drivers-age-selection'].value
                                }</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>PLZ:</span>
                                <span className={b('data-set-value')}>{data['postal-code-input'] && data['postal-code-input'].value
                                }</span>
                            </div>
                        </div>

                        {data['insurance-selection'] && <div className={b('data-set')}>
                            <div className={b('data-set-title-wrapper')}>
                                <span className={b('data-set-title')}>Versicherungshistorie</span>
                                <span className={b('edit-data')} onClick={() => this.editData('insurance-selection')}/>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Schadenfreiheitsklasse Haftpflicht:</span>
                                <span className={b('data-set-value')}>{data['insurance-selection'] && data['insurance-selection'].value
                                }</span>
                            </div>

                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Schadenfreiheitsklasse Volkasko:</span>
                                <span className={b('data-set-value')}>{data['kasko-insurance-selection'] && data['kasko-insurance-selection'].value
                                }</span>
                            </div>

                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Vorschaden in 12 Monaten:</span>
                                <span className={b('data-set-value')}>{data['first-selection'] &&
                                data['first-selection'].value}</span>
                            </div>
                            <div className={b('data-set-group')}>
                                <span className={b('data-set-label')}>Kündigung durch Vorversicherung:</span>
                                <span className={b('data-set-value')}>{data['second-selection'] && data['second-selection'].value}</span>
                            </div>

                        </div>}

                    </div>}
                </div>
                <h2 className={b('title')}>Schätze jetzt, wie viel Du im nächsten Jahr fahren wirst</h2>
                <div className={b('input-slider')}>
                    <InputSlider
                        className="slider slider-x"
                        axis='x'
                        x={this.state.rangeSliderValue}
                        xmin={3000}
                        xmax={10000}
                        onChange={this.handleChange}
                    />
                </div>

                <div className={b('calculation')}>
                    <span className={b('calculation-note')}>Bewege das Auto um die Kilometeranzahl zu verändernm</span>
                    <h2 className={b('range-value')}>{Math.floor(this.state.rangeSliderValue)} km/Jahr</h2>
                </div>

                <div className={b('right-column')}>
                    <h2 className={b('title-dash').mix('title-dash')}>Welches Versicherungspaket möchtest du haben?</h2>
                    <h2 className={b('second-title')}>Was möchtest Du dazu buchen?</h2>
                    <div className={b('insurance-options')}>
                        <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.handleInsuranceChange('TEILKASKO')}>
                                <span className={b('radio-circle').mix(this.state.insurance === 'TEILKASKO' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Teilkasko</span>
                            </span>
                            {/*
                             <span className={b('radio-info-icon')} onClick={() => { this.openModal('OFFER_TK') }}/>
                             */}
                            <div className={b('plans')}>
                        <span className={b('plan')}>
                            <span className={b('plan-title')}>Grundbeitrag</span>
                            <span className={b('plan-button')}>{flow.quote && this.formatInsurancePrice(this.state.base_premium_Teil)} Euro/Monat</span>
                        </span>
                                <span className={b('plan-s')}>
                            <span className={b('plan-title')}>Kilometerbeitrag</span>
                            <span className={b('plan-button')}>{flow.quote && this.formatKMPrice(this.state.per_1000_km_premium_Teil)} ct/km</span>
                        </span>
                            </div>
                            <div className={b('plan-border')} ></div>
                            <div className={b('text-below-border')}>Teilkasko: 150 Euro Selbstbeteiligung</div>
                            <br/>
                            <h3 className={b('plan-info')}>Leistungsumfang</h3>
                            <ul className={b('plan-info-details')}>
                                <li>- Haftpflichtversicherung</li>
                                <li>- Deckungssumme pauschal: 100.000.000 Euro</li>
                                <li>- Personenschäden begrenzt auf 15.000.000 Euro</li>
                                <li>- Werkstattservice</li>
                                <li>- Mallorca-Police</li>
                            </ul>
                        </div>
                        <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.handleInsuranceChange('KASKO')}>
                                <span className={b('radio-circle').mix(this.state.insurance === 'KASKO' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Volkasko</span>
                            </span>
                            {/*
                             <span className={b('radio-info-icon')} onClick={() => { this.openModal('OFFER_VK') }}/>
                             */}
                            <div className={b('plans')}>
                        <span className={b('plan')}>
                            <span className={b('plan-title')}>Grundbeitrag</span>
                            <span className={b('plan-button')}>{flow.quote && this.formatInsurancePrice(this.state.base_premium_Kasko)} Euro/Monat</span>
                        </span>
                                <span className={b('plan-s')}>
                            <span className={b('plan-title')}>Kilometerbeitrag</span>
                            <span className={b('plan-button')}>{flow.quote && this.formatKMPrice(this.state.per_1000_km_premium_Kasko)} ct/km</span>
                        </span>
                            </div>
                            <div className={b('plan-border')} ></div>
                            <div className={b('text-below-border')}>Teilkasko: 150 Euro Selbstbeteiligung</div>
                            <div className={b('text-below-border')}>Vollkasko: 300 Euro Selbstbeteiligung</div>
                            <h3 className={b('plan-info')}>Leistungsumfang wie Teilkasko plus</h3>
                            <ul className={b('plan-info-details')}>
                                <li>- Selbst verschuldete Schäden am eigenen Auto</li>
                                <li>- Vandalismus und mutwillige Beschädigung</li>
                                <li>- Werkstattservice</li>
                                <li>- Keine GAP Deckung</li>
                            </ul>
                        </div>

                        <div>
                            <input type="checkbox" name="final-checkbox" id="final-checkbox" value="on" onChange={e => { this.setSchutzbrief(e.target.checked) }}/>
                            <label htmlFor="final-checkbox"></label>
                            <span className={b('checkbox-right-text')}>Schutzbrief</span>
                            <div className={b('checkbox-text')}>
                                <span className={b('checkbox-right-big')}>X,XX Euro Grundbeitrag/Monat</span><br/>
                                Dein Schutzengel bei Pannen in Deutschland,
                                Pannen- und Unfallhilfe im Fall der Fälle.
                            </div></div>

                        <div>
                            <input type="checkbox" name="final-checkbox2" id="final-checkbox2" value="on" onChange={e => { this.setFahrerschutz(e.target.checked) }}/>
                            <label htmlFor="final-checkbox2"></label>
                            <span className={b('checkbox-right-text')}>Fahrerschutz</span>
                            <div className={b('checkbox-text')}>
                                <span className={b('checkbox-right-big')}>X,XX Euro Grundbeitrag/Monat</span><br/>
                                Absicherung des Fahrers bei
                            </div>
                        </div>
                    </div>

                    <footer className="funnel-footer">
                        <div className="container">
                            <div className={b('final-offer')}>
                                <span className={b('offer-msg')}>Dein voraussichtlicher Monatsbeitrag:</span>
                                <div className={b('offer-value')}>{this.state.total}€/Monat</div>
                                <Button className={b('offer-button')} text="Zum Antrag" onClick={this.submit}/>
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
        )
    }
}

const mapState = state => ({
    flow: state,
    input: state.selections['offer-final-step']
});
export default connect(mapState, { nextStep, jumpTo, calculateQuote, openModal, setSelection, setBreadcrump })(OfferFinalStep);

