
import React, {Component} from 'react';
import {connect} from 'react-redux';
import bem from 'bem-cn';
import {nextStep, setBreadcrump} from '../../../actions';
const b = bem('filter');

const Item = ({item, nextStep, setBreadcrump, currentFlow, currentStepId, breadcrumpData = '', onSelect}) => {
    const handleCarSelection = () => {
        nextStep();
        setBreadcrump({
            [currentFlow]: {
                [currentStepId]: {
                    value: breadcrumpData + ' ' + item.name
                }
            }
        })
        if(typeof onSelect === 'function') {
            onSelect(item)
        }
    }

    return (
        <div className={b('item')} onClick={handleCarSelection}>
            {item.name}
            <span className={b('arrow')} />
        </div>
    )
}

class SelectionFilter extends Component {
    state = {
        resultList: []
    }

    componentDidMount() {
        this.updateListFromProps(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.updateListFromProps(nextProps)
    }

    updateListFromProps(props) {
        const { list } = props;
        this.setState({resultList: list});
    }

    handleSearch = () => {
        const { list } = this.props;
        const keyword = this.searchInput.value.toLowerCase();
        const result = list.filter(item => item.name.toLowerCase().includes(keyword));
        this.setState({resultList: result})
    }

    render() {
        const { resultList } = this.state;
        const { nextStep, setBreadcrump, currentStepId, breadcrumpData, onSelect } = this.props;
        const { currentFlow } = this.props.flow;
        return (
            <div className={b()}>
                <div className={b('container')}>
                    <div className={'input-wrapper'}>
                        <input
                            className={b('input')}
                            ref={searchInput => this.searchInput = searchInput}
                            type="text"
                            placeholder="Auswahl filtern"
                            onChange={this.handleSearch}
                        />
                    </div>
                    <div className={b('items')}>
                        {resultList.map((item, i) => <Item key={i}
                                                           item={item}
                                                           nextStep={nextStep}
                                                           setBreadcrump={setBreadcrump}
                                                           currentFlow={currentFlow}
                                                           currentStepId={currentStepId}
                                                           breadcrumpData={breadcrumpData}
                                                           onSelect={onSelect}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        flow: state
    }
}

export default connect(mapState, {nextStep, setBreadcrump})(SelectionFilter);
