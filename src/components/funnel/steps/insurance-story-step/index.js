import React, {Component} from 'react'
import {connect} from 'react-redux'
import { nextStep, setSelection, setBreadcrump } from 'actions'
import bem from 'bem-cn'
import Step from 'components/funnel/step'
import Button from 'components/funnel/button';
import SelectionFilter from 'components/funnel/selection-filter'
import insuranceTypes from 'data/insuranceTypes'
import logo from 'images/insurance-selection-step-icon.svg'

const b = bem('insurance-story-step')
class InsuranceStoryStep extends Component {

    state = {
        firstselection: 'Nein',
        secondselection: 'Nein'
    }

    constructor(props) {
        super(props);
        this.setFirstValue = this.setFirstValue.bind(this);
        this.setSecondValue = this.setSecondValue.bind(this);
    }

    setFirstValue(item) {
        this.props.setSelection({
            "first-selection": {
                firstselection: item
            }
        });

        this.setState({firstselection: item});
    }
    setSecondValue(item) {
        this.props.setSelection({
            "second-selection": {
                secondselection: item
            }
        });

        this.setState({secondselection: item});
    }

    nextStep = () => {
        const { nextStep, setSelection, setBreadcrump, flow } = this.props;
        const { currentFlow } = flow;
        nextStep();

        const {firstselection, secondselection} = this.state;

        setBreadcrump({
            [currentFlow]: {
                'first-selection': {
                    value: firstselection
                },
                'second-selection': {
                    value: secondselection
                }
            }
        })
    };

    submit = () => {
        const data = {
            selectioncode: this.selection
        };
        this.nextStep();
    };

    componentWillMount() {
        window.scrollTo(0,0);
        const { selections } = this.props.flow;
        this.setState({...selections['first-selection'], ...selections['second-selection']});

        if (this.state.firstselection == ''){
            this.setState({
                firstselection: 'Nein',
                secondselection: 'Nein'
            })
        } else {

        }
    }

    render() {
        const {firstselection, secondselection} = this.state;

        return (
            <div className={b()}>
                <Step title="Hast Du Deine Kfz-Versicherung in den letzten 12 Monaten in Anspruch genommen">
                    <div className={b('container')}>
                        <div className={'input-wrapper'}>
                            <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.setFirstValue('Ja')}>
                                <span className={b('radio-circle').mix(firstselection === 'Ja' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Ja</span>
                            </span>
                            </div>

                            <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.setFirstValue('Nein')}>
                                <span className={b('radio-circle').mix(firstselection === 'Nein' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Nein</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </Step>
                <br/><br/><br/>
                <Step title="Wurde dir Deine vorherige Versicherung gekundigt">

                    <div className={b('container')}>
                        <div className={'input-wrapper'}>
                            <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.setSecondValue('Ja')}>
                                <span className={b('radio-circle').mix(secondselection === 'Ja' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Ja</span>
                            </span>
                            </div>

                            <div className={b('radio-group')}>
                            <span className={b('radio')} onClick={() => this.setSecondValue('Nein')}>
                                <span className={b('radio-circle').mix(secondselection === 'Nein' ? 'checked' : '')}/>
                                <span className={b('radio-label')}>Nein</span>
                            </span>
                            </div>
                        </div>
                    </div>

                </Step>

                <br/><br/>

                <Button text="Weiter" center onClick={this.submit}/>

            </div>
        )
    }
}

const mapState = state => ({flow: state});

export default connect(mapState, { nextStep, setSelection, setBreadcrump })(InsuranceStoryStep);
