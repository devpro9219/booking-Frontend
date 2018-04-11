
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { nextStep, fetchBrands, fetchModels } from '../../../../actions'
import Step from '../../step';
import SelectionFilter from '../../selection-filter';

class CarSelectionStep extends Component {

    constructor(props) {
        super(props)

        this.handleOnSelect = this.handleOnSelect.bind(this)
    }

    componentWillMount() {
        this.props.fetchBrands()
    }

    handleOnSelect(item) {
        if(item.value && typeof item.value === 'number') {
            this.props.fetchModels(item.value)
        }
    }

    render() {
        const brands = this.props.brands.map((brand, i) => {
            return {
                value: brand.id,
                name: brand.name
            }
        })
        return (
            <Step title="Von welcher Marke ist dein auto?">
                <SelectionFilter list={brands} currentStepId="car-selection" onSelect={this.handleOnSelect} />
            </Step>
        )
    }
}

const mapState = state => {
    return {
        brands: state.brands
    }
}

export default connect(mapState, { nextStep, fetchBrands, fetchModels })(CarSelectionStep);
