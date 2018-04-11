
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, setSelection } from '../../../../actions'
import Step from '../../step';
import SelectionFilter from '../../selection-filter';

class CarEngineSelectionStep extends Component {
    constructor(props) {
        super(props);

        this.selectVariant = this.selectVariant.bind(this);
    }
    prevSelection = stepId => {
        const { breadcrump, currentFlow} = this.props.flow;
        return breadcrump[currentFlow] ? breadcrump[currentFlow][stepId].value : '';
    }

    mapVariants() {
        return this.props.variants.map((variant) => {
            return {
                value: variant.id,
                name: variant.name
            };
        })
    }

    selectVariant(item) {
        const variantId = item.value;

        const variant = this.props.variants.find(variant => variant.id === variantId);

        this.props.setSelection({ vehicle_variant: variant });
    }

    render() {
        const variants = this.mapVariants()
        return (
            <Step title="Welchen Motor hast du?">
                <SelectionFilter list={variants}
                                 currentStepId="car-engine-selection"
                                 breadcrumpData={this.prevSelection('car-model-selection')}
                                 onSelect={this.selectVariant}
                />
            </Step>
        )
    }
}

const mapState = state => {
    return {
        flow: state,
        variants: state.variants
    }
}

export default connect(mapState, { nextStep, setSelection })(CarEngineSelectionStep);
