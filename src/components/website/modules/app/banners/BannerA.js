import React, { Component } from 'react'
import BannerLeft from './templates/BannerLeft'
import appIcon from '../../../../../images/showcase-banner/app-icon-a.svg'
import appScreenshot from '../../../../../images/showcase-banner/app-screenshot-a.svg'

class BannerA extends Component {
    render() {
        return(
            <BannerLeft
                title="Versicherungsdetails & Kostenübersicht"
                text="Mit der EMIL App hast Du alle Kosten live im Blick und kannst Deine Vertragsdetails jederzeit einsehen."
                icon={appIcon}
                image={appScreenshot}
            />
        )
    }
}

export default BannerA