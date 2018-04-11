
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, fetchVariants } from '../../../../actions'
import Step from '../../step';
import SelectionFilter from '../../selection-filter';

class CarModelSelectionStep extends Component {
    constructor(props) {
        super(props)

        this.handleOnSelect = this.handleOnSelect.bind(this)
    }
    prevSeletion = stepId => {
        const { breadcrump, currentFlow} = this.props.flow;
        return breadcrump[currentFlow] ? breadcrump[currentFlow][stepId].value : '';
    }

    mapModels() {
        return this.props.models.map((model) => {
            return {
                value: model.id,
                name: model.name
            }
        })
    }

    handleOnSelect(item) {
        if(item.value && typeof item.value === 'number') {
            this.props.fetchVariants(item.value)
        }
    }
    
    render() {
        const models = this.mapModels()
        return (
            <Step title="Welches Modell hast du?">
                <SelectionFilter
                    list={models}
                    nextStep={this.nextStep}
                    currentStepId="car-model-selection"
                    breadcrumpData={this.prevSeletion('car-selection')}
                    onSelect={this.handleOnSelect}
                />
            </Step>
        )
    }
}

const mapState = state => {
    return {
        flow: state,
        models: state.models
    }
}

export default connect(mapState, { nextStep, fetchVariants })(CarModelSelectionStep);
