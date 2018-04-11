import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from 'components/funnel/header';
import ProgressBar from 'components/funnel/progress-bar';
import BreadCrumbs from 'components/funnel/breadcrumbs';
import Options from 'components/funnel/steps/options';
import SubOptions1 from 'components/funnel/steps/sub-options-1';
import SubOptions2 from 'components/funnel/steps/sub-options-2';
import CarSelectionStep from 'components/funnel/steps/car-selection-step';
import CarModelSelectionStep from 'components/funnel/steps/car-model-selection-step';
import CarEngineSelectionStep from 'components/funnel/steps/car-engine-selection-step';
import VehicleRegistrationCarSelectionStep from 'components/funnel/steps/vehicle-registration-car-selection-step';
import CarRegistrationDateInputStep from 'components/funnel/steps/car-registration-date-input-step';
import AgeInputStep from 'components/funnel/steps/age-input-step';
import PostalCodeInputStep from 'components/funnel/steps/postal-code-input-step';
import InsuranceSelectionStep from 'components/funnel/steps/insurance-selection-step';
import KaskoInsuranceSelectionStep from 'components/funnel/steps/kasko-insurance-selection-step';

import InsuranceStoryStep from 'components/funnel/steps/insurance-story-step';

import OfferFinalStep from 'components/funnel/steps/offer-final-step';
import UserRegistrationStep from 'components/funnel/steps/user-registration-step';
import BankingInformationStep from 'components/funnel/steps/banking-information-step';
import LoginInformationStep from 'components/funnel/steps/login-information-step';
import CurrentInsuranceInfoStep from 'components/funnel/steps/current-insurance-info-step';
import RegistrationFinalStep from 'components/funnel/steps/registration-final-step';
import FinalStep from 'components/funnel/steps/final-step';
import Popup from 'components/funnel/popup';
import Footer from 'components/funnel/footer';
import {getInsuranceData} from 'helper/dataManager';
class App extends Component {
    getCurrentStepId = () => {
        const { currentStepIndex, flows, currentFlow } = this.props.flow;
        return currentFlow ? flows[currentFlow].steps[currentStepIndex] : 'options';
    }

    renderPage = () => {
        const currentStepId = this.getCurrentStepId();
        switch (currentStepId) {
            case 'options':
                return (<Options key={1}/>);
            case 'sub-options-1':
                return (<SubOptions1 key={2}/>);
            case 'sub-options-2':
                return (<SubOptions2 key={3}/>);
            case 'car-selection':
                return <CarSelectionStep key={5}/>;
            case 'car-model-selection':
                return <CarModelSelectionStep key={6}/>;
            case 'car-engine-selection':
                return <CarEngineSelectionStep key={7}/>;
            case 'vehicle-registration-car-selection':
                return <VehicleRegistrationCarSelectionStep key={18}/>;
            case 'car-registration-date-input':
                return <CarRegistrationDateInputStep key={16}/>;
            case 'age-input-step':
                return <AgeInputStep key={17}/>;
            case 'postal-code-input':
                return <PostalCodeInputStep key={12}/>;
            case 'insurance-selection':
                return <InsuranceSelectionStep key={13}/>;
            case 'kasko-insurance-selection':
                return <KaskoInsuranceSelectionStep key={14}/>;

            case 'insurance-story-step':
                return <InsuranceStoryStep key={25}/>;

            case 'offer-final-step':
                return <OfferFinalStep key={15}/>;
            case 'user-registration-step':
                return <UserRegistrationStep key={19} />;
            case 'banking-information-step':
                return <BankingInformationStep key={20} /> ;
            case 'login-information-step':
                return <LoginInformationStep key={21} /> ;
            case 'current-insurance-info-step':
                return <CurrentInsuranceInfoStep key={22} />;
            case 'registration-final-step':
                return <RegistrationFinalStep key={23} />;
            case 'final-step':
                return <FinalStep key={24} />;
            default:
                return (<div key={10}>Wrong step</div>)
        }
    };

    render() {
        const { transitionDirection } = this.props.flow;
        const currentStepId = this.getCurrentStepId();

        const transitionProps = {
            className: 'wizard',
            transitionName: transitionDirection === 'right' ? 'page-right' : 'page',
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        }
        console.log(getInsuranceData('SF10'));
        return(
            <div className="funnel-root">
                <div>adsfasdfasdf</div>
                <main className="funnel-main">
                    <div className="container">
                        <Header/>
                        <ProgressBar/>
                        <BreadCrumbs />
                        <div className={'step-wrapper ' + currentStepId}>
                            <ReactCSSTransitionGroup {...transitionProps}>
                                {this.renderPage()}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>
                </main>
                <Footer />
                <Popup currentOpenModalID='OFFER_VK'/>
            </div>

        )
    }
}

const mapState = state => ({flow: state});

export default connect(mapState,null)(App);