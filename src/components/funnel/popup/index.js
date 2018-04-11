import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from 'actions';
import bem from 'bem-cn';
import VK from 'components/funnel/popups/vk';
import TK from 'components/funnel/popups/tk';
import HsnTsn from 'components/funnel/popups/hsn_tsn';

const b = bem('popup');

class Popup extends Component {
    constructor(props){
        super(props);

        this.renderContent = this.renderContent.bind(this);
        this.close = this.close.bind(this);
    }

    renderContent() {
        const currentOpenModalID = this.props.modal.id;

        switch(currentOpenModalID){
            case 'OFFER_VK':
                return <VK />;
            case 'OFFER_TK':
                return <TK />;
            case 'HSN_TSN':
                return <HsnTsn />
            default:
                return;
        }
    }

    close() {
        this.props.closeModal(this.props.modal.previousScrollPosition);
    }

    render() {
        const isModalOpen = this.props.modal.open;
        return (
            <div className={b({open: isModalOpen})}>
                <div className={b('content')}>
                    <i className={b('close-button')} onClick={this.close}></i>
                    { this.renderContent() }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    }
};

export default connect(mapStateToProps, { closeModal })(Popup);