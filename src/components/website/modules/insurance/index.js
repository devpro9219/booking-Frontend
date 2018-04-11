import React, { Component } from 'react'
import Page from '../shared/Page'
import Partnership from '../shared/Partnership'
import PurpleBanner from '../shared/PurpleBanner'
import ContentHeader from './ContentHeader'
import InsuranceFacts from './InsuranceFacts'
import Packages from './Packages'
import TripleBanner from '../shared/TripleBanner'
import DrivingBanner from './DrivingBanner'
import HeroHeader from './HeroHeader'
import icon from '../../../../images/triple-banner/visual-plusses.svg'
import banner1 from '../../../../images/triple-banner/medical-stuff.svg'
import banner2 from '../../../../images/triple-banner/siren.svg'
import banner3 from '../../../../images/triple-banner/car-key.svg'
import GetAQuote from '../shared/GetAQuote'
import EmilApp from '../shared/EmilApp'

class Main extends Component {
    render() {
        const tripleBannerContent = {
            title: 'Add extra features',
            icon,
            banners: [
                {
                    title: 'Medical injury',
                    text: 'His boy middleton sir nor engrossed affection.',
                    image: banner1
                },
                {
                    title: 'Roadside assistance',
                    text: 'Months on ye at by esteem desire warmth.',
                    image: banner2
                },
                {
                    title: 'Rental car',
                    text: 'Drop your car at the repair shop and get a new one.',
                    image: banner3
                }
            ]
        }
        return(
            <Page>
                <HeroHeader />
                <article>
                    <InsuranceFacts />
                    <GetAQuote/>
                    <EmilApp/>

                </article>
            </Page>
        )
    }
}

export default Main

