import React, { Component } from 'react';
import { connect } from 'react-redux';
import successIcon from 'images/registration-success.svg';
import errorIcon from 'images/registration-error1.svg';
import car from 'images/car.svg';
import bem from 'bem-cn';
import Button from 'components/funnel/button';


const b = bem('final-step');

class FinalStep extends Component {
    state = {
        componentData: {
            success: {
                icon: successIcon,
                message: 'Thank you for signing up with Emil. We have received the insurance application and will get back to you within the next hours.'
            },
            error: {
                icon: errorIcon,
                message: 'Es tut uns Leid. Deine Anfrage könnte nicht verarbeitet werden.\n' +
                'Bitte überprüfe nochmals die von Dir eingegebenen Informationen. Sollte das Problem weiterhin bestehen, wende Dich bitte an unseren Kundenservice.\t'
            }
        }
    };

    render() {
        const { success } = this.props;
        const componentDataKey = success ? 'success' : 'error';
        const componentData = this.state.componentData[componentDataKey];
        if (componentDataKey == 'success'){
            return (
                <div className={b()}>
                    <div className={b('container')}>
                        <p className={b('message-success')}>Herzlichen Glückwunsch und Willkommen bei EMIL!</p>
                        <p className={b('message-success-sub')}>Der weitere Ablauf:</p>
                        <div className={b('success-block')}>
                            <div className={b('success-label')}>1</div>
                            <div className={b('success-detail-b')}>Lade die EMIL App auf Dein Smartphone herunter</div>
                        </div>
                        <div>
                            <ul className="MainFooter-apps-success">
                                <li><a className="Button Button--transparent Button--apple" href="#">App Store</a></li>
                                <li><a className="Button Button--blue Button--gplay" href="#">Google Play</a></li>
                            </ul>
                        </div>
                        <div className={b('success-block')}>
                            <div className={b('success-label')}>2</div>
                            <div className={b('success-detail-b')}>Wir überprüfen Deinen Antrag</div>
                            <div className={b('success-detail')}>Sollte alles passen, erhälst du von uns eine Bestätigung und die eVB-Nummer für die Zulassung deines Fahrzeugs.</div>
                        </div>
                        <div className={b('success-block')}>
                            <div className={b('success-label')}>3</div>
                            <div className={b('success-detail-b')}>Wir überprüfen Deinen Antrag</div>
                            <div className={b('success-detail')}>Sollte alles passen, erhälst du von uns eine Bestätigung und die eVB-Nummer für die Zulassung deines Fahrzeugs.</div>
                        </div>
                        <div className={b('success-block')}>
                            <div className={b('success-label')}>4</div>
                            <div className={b('success-detail-b')}>Wir überprüfen Deinen Antrag</div>
                            <div className={b('success-detail')}>Sollte alles passen, erhälst du von uns eine Bestätigung und die eVB-Nummer für die Zulassung deines Fahrzeugs.</div>
                        </div>
                        <div className={b('success-block')}>
                            <div className={b('success-detail-bottom')}>Wir wünschen eine gute Fahrt mit EMIL</div>
                            <div className={b('success-detail-bottom-car')}><img src={car}></img></div>
                        </div>

                    </div>
                </div>
            );
        } else {
            return (
                <div className={b()}>
                    <div className={b('container')}>
                        <img className={b('icon')} src={componentData.icon}/>
                        <div className={b('icon-text')}>
                            <p className={b('message')}>Es tut uns Leid. Deine Anfrage könnte nicht verarbeitet
                                werden.
                                Bitte überprüfe nochmals die von Dir eingegebenen Informationen. Sollte das Problem
                                weiterhin bestehen, wende Dich bitte an unseren Kundenservice.</p>
                            <br/>
                            <div>
                                <span className={b('error-header')}>t &nbsp;&nbsp;</span><span
                                className={b('error-header-text')}> 0800 000 404</span>
                            </div>
                            <div>
                                <span className={b('error-header')}>e &nbsp;&nbsp;</span><span
                                className={b('error-header-text')}>hallo@emil.de</span>
                            </div>
                        </div>

                    </div>
                </div>

            );
        }

    }
}

const mapStateToProps = state => {
    return {
        success: state.registrationSuccess
    }
}

export default connect(mapStateToProps, {})(FinalStep);