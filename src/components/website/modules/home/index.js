import React, { Component } from 'react'
import Page from '../shared/Page'
import ContentHeader from './ContentHeader'
import BenefitsBanner from './BenefitsBanner'
import JoinEmilCompanion from './JoinEmilCompanion'
import JoinEmil from './JoinEmilv2'
import QuotationBanner from './QuotationBanner'
import HeroHeader from './HeroHeader'
import Partners from '../shared/Partners'
import GetAQuotePrimary from '../shared/GetAQuotePrimary'
import EmilAttributes from "./EmilAttributes";

class Main extends Component {
    render() {
        return(
            <Page>
                <HeroHeader />
                <article>
                    <BenefitsBanner />
                    <Partners />
                    <EmilAttributes />
                    <QuotationBanner />
                    <GetAQuotePrimary />
                </article>
            </Page>
        )
    }
}

export default Main

