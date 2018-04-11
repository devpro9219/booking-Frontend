import React, { Component } from 'react'
import BannerLeft from './templates/BannerLeft'
import appIcon from '../../../../../images/showcase-banner/app-icon-e.svg'
import appScreenshot from '../../../../../images/showcase-banner/app-screenshot-e.svg'

class BannerE extends Component {
    render() {
        return(
            <BannerLeft
                title="Fahrtenbuch"
                text="Führe ein Fahrtenbuch und unterscheide zwischen privaten und geschäftlichen Fahrten. Du entscheidest, welche Fahrten in der App aufgezeichnet werden, und welche nicht."
                icon={appIcon}
                image={appScreenshot}
            />
        )
    }
}

export default BannerE