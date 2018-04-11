import React, { Component } from 'react'

import app1 from '../../../../images/app/icon_app1.svg'
import app2 from '../../../../images/app/icon_app2.svg'
import app3 from '../../../../images/app/icon_app3.svg'
import app4 from '../../../../images/app/icon_app4.svg'


class ContentFooter extends Component {
    render() {
        return(
            <footer className="smartcar">
                <h1 className="smartcar-title">Smart-Car Funktionen in Entwicklung</h1>
                <div className="smart-car-img">
                    <img src={app1} alt="smart car" className="app-img" />
                    <p>Spritspartrainer</p>
                </div>
                <div className="smart-car-img">
                    <img src={app2} alt="smart car" className="app-img" />
                    <p>Fehlercode Analyse</p>
                </div>
                <div className="smart-car-img">
                    <img src={app4} alt="smart car" className="app-img" />
                    <p>EMIL Community</p>
                </div>
                <div className="smart-car-img">
                    <img src={app3} alt="smart car" className="app-img" />
                    <p>Wartungs Erinnerung</p>
                </div>


            </footer>
        )
    }
}

export default ContentFooter