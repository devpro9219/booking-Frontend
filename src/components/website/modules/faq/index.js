import React, { Component } from 'react'
import Page from '../shared/Page'
import HeroHeader from './HeroHeader'
import FAQNav from './FAQNav'
import FAQContent from './FAQContent'
import ContentFooter from './ContentFooter'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'about'
        }
        this.changeTab = this.changeTab.bind(this)
    }
    changeTab(tab){
        this.setState({
            currentTab: tab
        })
    }
    render() {
        return(
            <Page>
                <HeroHeader />
                <article className="js-FAQBody">
                    <FAQNav changeTab={this.changeTab} currentTab={this.state.currentTab} />
                    <FAQContent currentTab={this.state.currentTab} />
                </article>
            </Page>
        )
    }
}

export default Main