import React, { Component } from 'react'
import BannerRight from './templates/BannerRight'
import appIcon from '../../../../../images/showcase-banner/app-icon-d.svg'
import appScreenshot from '../../../../../images/showcase-banner/app-screenshot-e.svg'

class BannerD extends Component {
    render() {
        return(
            <BannerRight
                title="Auto Finden"
                text="Vergessen, wo Du geparkt hast oder wie lange Du schon dort stehst? Finde Dein Auto mit der EMIL App und vermeide Strafzettel für zu langes Parken."
                icon={appIcon}
                image={appScreenshot}
            />
        )
    }
}

export default BannerD

