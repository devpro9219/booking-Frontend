
import React, { Component } from 'react';
import { connect } from 'react-redux';
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import icon1 from 'images/icon1.png'
import icon2 from 'images/icon2.png'
import icon3 from 'images/icon3.png'
import IconBox from 'components/funnel/option-box';
import { setSelection } from 'actions';

const b = bem('options');

class Options extends Component {
    constructor(props) {
        super(props)
        this.setSecondCar = this.setSecondCar.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.setHasPreviousInsurance = this.setHasPreviousInsurance.bind(this);
    }

    selectOption(option) {
        switch(option){
            case 1:
                this.setSecondCar(false);
                this.setHasPreviousInsurance(true);
                break;
            case 2:
                this.setSecondCar(false);
                this.setHasPreviousInsurance(false);
                break;
            case 3:
                this.setSecondCar(true);
                break;
            default:
                break;
        }
    }

    setHasPreviousInsurance(opt){
        this.props.setSelection({ previous_insurance: opt });
    }

    setSecondCar(opt) {
        this.props.setSelection({ second_car: opt });
    }
    render() {
        return (
            <Step title="Wähle eine der folgenden Optionen:">
                <div className={b('boxes')}>
                    <IconBox
                        iconUrl={icon1}
                        text="Versicherungswechsel"
                        flow="1"
                        onPageChange={ () => { this.selectOption(1) } }
                    />
                    <IconBox
                        iconUrl={icon2}
                        text="Erstversicherung"
                        flow="2"
                        onPageChange={ () => { this.selectOption(2) } }
                    />
                    <IconBox
                        iconUrl={icon3}
                        text="Zweitwagen"
                        flow="3"
                        onPageChange={ () => { this.selectOption(3) } }
                    />
                </div>
            </Step>
        );
    }
}

export default connect(null, { setSelection })(Options);