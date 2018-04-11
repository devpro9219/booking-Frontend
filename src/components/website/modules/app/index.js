import React, { Component } from 'react'
import Page from '../shared/Page'
import HeroHeader from './HeroHeader'
import ContentHeader from './ContentHeader'
import ContentHeader2 from './ContentHeader2'
import ContentFooter from './ContentFooter'
import BannerA from './banners/BannerA'
import BannerB from './banners/BannerB'
import BannerC from './banners/BannerC'
import BannerD from './banners/BannerD'
import BannerE from './banners/BannerE'
import GetAQuote from '../shared/GetAQuote'

class Main extends Component {
    render() {
        return(
            <Page>
                <HeroHeader />
                <article>
                    <ContentHeader />
                    <BannerA />
                    <BannerB />
                    <BannerC />
                    <ContentHeader2 />
                    <BannerD />
                    <BannerE />
                    <ContentFooter />
                    <GetAQuote/>
                </article>
            </Page>
        )
    }
}

export default Main

