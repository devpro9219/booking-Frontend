import React, {Component} from 'react';
import { connect } from 'react-redux';
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import icon1 from 'images/icon1.png'
import icon2 from 'images/icon2.png'
import IconBox from 'components/funnel/option-box';
import { setSelection } from 'actions';
const b = bem('step1b');

class Step1b extends Component {
    selectOption = (option) => {
        const { setSelection } = this.props;
        switch(option){
            case 1:
                setSelection({ previous_insurance: true });
                break;
            case 2:
                setSelection({ previous_insurance: false });
                break;
            default:
                break;
        }
    }
    render() {
        return (
        <Step title="Wähle eine der folgenden Optionen:">
            <div className={b('boxes')}>
                <IconBox
                    iconUrl={icon1}
                    text="Zweitwagen Versicherungswechsel"
                    onPageChange={ () => { this.selectOption(1) } }
                />
                <IconBox
                    iconUrl={icon2}
                    text="Zweitwagen Erstversicherung"
                    onPageChange={ () => { this.selectOption(2) } }
                />
            </div>
        </Step>
        )
    }
}

export default connect(null, { setSelection })(Step1b);
