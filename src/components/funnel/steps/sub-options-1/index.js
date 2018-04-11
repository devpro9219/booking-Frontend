
import React, {Component} from 'react';
import bem from 'bem-cn';
import Step from 'components/funnel/step';
import icon4 from 'images/icon4.png';
import icon5 from 'images/icon5.png';
import IconBox from 'components/funnel/option-box';
const b = bem('step2');

class SubOptions1 extends Component {

    render() {
        return (
        <Step title="Um welches Fahrzeug handelt es sich?">
            <div className={b('boxes')}>
                <IconBox
                    iconUrl={icon4}
                    text="Fahrzeug aus der Liste wählen"

                />
                <IconBox
                    iconUrl={icon5}
                    text="Daten vom Fahrzeugschein eingeben"
                    switchFlow
                />
            </div>
        </Step>
        )
    }
}

export default SubOptions1;
