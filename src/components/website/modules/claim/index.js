import React, { Component } from 'react'
import Page from '../shared/Page'
import Partnership from '../shared/Partnership'
import GetAQuote from '../shared/GetAQuote';
import HeroHeader from './HeroHeader'
import Steps from './Steps'

class Main extends Component {
    render() {
        return(
            <Page>
                <HeroHeader />
                <article>
                    <Partnership />
                    <Steps />
                    <GetAQuote />
                </article>
            </Page>
        )
    }
}

export default Main
