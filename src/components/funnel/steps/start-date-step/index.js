import React, { Component } from 'react';
import { connect } from 'react-redux';
import Step from 'components/funnel/step';
import Button from 'components/funnel/button';
import { nextStep } from 'actions';
import bem from 'bem-cn';
const b = bem('start-date-step');

class CurrentInsuranceInfoStep extends Component {
    state = {
        start_date: {
            day: '',
            month: '',
            year: ''
        }
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
    
    submit = () => {
        this.props.nextStep();
    }
    render() {
        return (
            <Step>
                <div className={b('container')}>
                    <h3 className={b('title')}>Ab wann möchtest du versichert sein?</h3>
                    <div className={b('inputs').mix('date-wrapper')}>
                        <div className={b('input').mix('date-container')}>
                            <div className={b('date-wrapper')}>
                                <input type="text"
                                       placeholder="01"
                                       value={this.state.start_date.day}
                                       onChange={ e => { this.setStartingDay(e.target.value) } } />
                            </div>
                            <div className={b('date-wrapper')}>
                                <input type="text" placeholder="08" value={this.state.start_date.month} onChange={ e => { this.setStartingMonth(e.target.value) } }/>
                            </div>
                            <div className={b('date-wrapper').mix('year')}>
                                <input type="text" placeholder="1990" value={this.state.start_date.year} onChange={ e => { this.setStartingYear(e.target.value) } } />
                            </div>
                        </div>
                    </div>
                    <Button text='Weiter' center onClick={this.submit}/>
                </div>
            </Step>
        );
    }
}

export default connect(null, { nextStep })(CurrentInsuranceInfoStep);