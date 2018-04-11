import React, { Component } from 'react'

import paperless from '../../../../images/icon_paperless.jpg'
import contract from '../../../../images/icon_contract.jpg'
import dataprotection from '../../../../images/icon_dataprotection.jpg'
import drivingstyle from '../../../../images/icon_drivingstyle.jpg'


class EmilAttributes extends Component {
    render() {
        return(
            <footer className="emil-att">
                <h1 className="emil-att-title">Zahle pro gefahrenem Kilometer, spare Geld und verleihe Deinem Auto Smart-Car Funktionen. Und das ist nicht alles! Wer sich genauer mit EMIL auseinandersetzt, entdeckt noch viele weitere Vorteile. Hierzu gehören beispielsweise:</h1>
                <div className="emil-att-img">
                    <img src={contract} alt="emil features" className="emil-att-app-img" />
                    <p>Monatlich Kündbar</p>
                </div>
                <div className="emil-att-img">
                    <img src={paperless} alt="emil features" className="emil-att-app-img" />
                    <p>Papierlos</p>
                </div>
                <div className="emil-att-img">
                    <img src={drivingstyle} alt="emil features" className="emil-att-app-img" />
                    <p>Unabhängig vom Fahrstil</p>
                </div>
                <div className="emil-att-img">
                    <img src={dataprotection} alt="emil features" className="emil-att-app-img" />
                    <p>Höchste Datensicherheit</p>
                </div>


            </footer>
        )
    }
}

export default EmilAttributes