import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFlow, jumpTo, closeModal } from 'actions';
import bem from 'bem-cn';
import Button from 'components/funnel/button';
const b = bem('popup-content');

class HsnTsn extends Component {
    btnHandler = () => {
        const { setFlow, jumpTo , closeModal, fluxState } = this.props;
        const { originalFlow } = fluxState;
        let stepIndex;

        closeModal();
        setFlow(originalFlow);
        
        switch(originalFlow){
            case '1':
                stepIndex = 2;
                break;
            case '2':
                stepIndex = 2;
                break;
            case '3':
                stepIndex = 3;
                break;
            default: break;
        }
        
        jumpTo(stepIndex);
    }

    render() {
        return (
            <div className={b()}>
                <p className={b('green-text')}> Wir konnten kein passendes Fahrzeug finden. Bitte überprüfe deine Eingabe oder wähle dein Fahrzeug aus der Liste aus. </p>
                <Button center={true} text='Weiter zu Liste' onClick={this.btnHandler}/>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return { fluxState: state };
};

export default connect(mapStateToProps, { setFlow, jumpTo, closeModal })(HsnTsn);