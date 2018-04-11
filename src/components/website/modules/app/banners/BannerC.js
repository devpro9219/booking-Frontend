import React, { Component } from 'react'
import BannerLeft from './templates/BannerLeft'
import appIcon from '../../../../../images/showcase-banner/app-icon-c.svg'
import appScreenshot from '../../../../../images/showcase-banner/app-screenshot-c.svg'

class BannerC extends Component {
    render() {
        return(
            <BannerLeft
                title="Dokumente per Foto einreichen & Bearbeitungsstatus nachverfolgen"
                text="Reiche Polizeiberichte und andere Doukmente als Foto über die App weiter und verfolge den Bearbeitungsstatus in Echtzeit."
                icon={appIcon}
                image={appScreenshot}
            />
        )
    }
}

export default BannerC