import React, { Component } from 'react'
import BannerRight from './templates/BannerRight'
import appIcon from '../../../../../images/showcase-banner/app-icon-b.svg'
import appScreenshot from '../../../../../images/showcase-banner/app-screenshot-b.svg'

class BannerB extends Component {
    render() {
        return(
            <BannerRight
                title="Kundenservice, Schadenservice & Pannenservice"
                text="Falls Du Fragen hast oder es zu einem Schaden kommen sollte, ist das Team von EMIL und unser Partner, die Gothaer Allgemeine Versicherung AG, jederzeit für Dich erreichbar - Sowohl über die App, als auch klassisch per Telefon."
                icon={appIcon}
                image={appScreenshot}
            />
        )
    }
}

export default BannerB