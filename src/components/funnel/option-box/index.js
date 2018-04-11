
import React from 'react';
import { connect } from 'react-redux';
import { setFlow, nextStep, setSelection } from '../../../actions';
import bem from 'bem-cn';

const b = bem('icon-box');

const OptionBox = ({iconUrl, text, flow, state, setFlow, nextStep, switchFlow, onPageChange}) => {
    const pageChange = () => {
        const { currentFlow, originalFlow } = state;
        
        switchFlow ? setFlow('b') : setFlow(originalFlow || currentFlow);

        currentFlow ? nextStep() : setFlow(flow);
        
        if(typeof onPageChange === 'function') onPageChange();
    }

    return (
        <span className={b()} onClick={pageChange}>
            <div className={b('image-wrapper')}>
                <img alt={text} src={iconUrl}/>
            </div>
            <div className={b('box-text-wrapper')}>
                <span className={b('box-text')}>
                    {text}
                </span>
            </div>
        </span>
    )
}

const mapState = state => {
    return { state };
};

export default connect(mapState, { setFlow, nextStep, setSelection })(OptionBox);
