import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LayoutWebsite from './components/layouts/website'
import Home from './components/website/modules/home'
import Insurance from './components/website/modules/insurance'
import App from './components/website/modules/app'
import Claim from './components/website/modules/claim'
import FAQ from './components/website/modules/faq'
import Funnel from './containers/app'
import LandingPage from './components/landing'
import Imprint from './components/website/modules/imprint'
import Erstinformation from './components/website/modules/erstinformation'
import Datenschutz from './components/website/modules/datenschutz'

class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={ _ => <LayoutWebsite> <Home /> </LayoutWebsite>} />
                <Route exact path='/versicherung' render={ _ => <LayoutWebsite> <Insurance /> </LayoutWebsite>} />
                <Route exact path='/app' render={ _ => <LayoutWebsite> <App /> </LayoutWebsite>} />
                <Route exact path='/schaden' render={ _ => <LayoutWebsite> <Claim /> </LayoutWebsite>} />
                <Route exact path='/faq' render={ _ => <LayoutWebsite> <FAQ /> </LayoutWebsite>} />
                <Route exact path='/impressum' render={ _ => <LayoutWebsite purpleMenu={true}> <Imprint /> </LayoutWebsite>} />
                <Route exact path='/erstinformation' render={ _ => <LayoutWebsite purpleMenu={true}> <Erstinformation /> </LayoutWebsite>} />
                <Route exact path='/datenschutz' render={ _ => <LayoutWebsite purpleMenu={true}> <Datenschutz /> </LayoutWebsite>} />
                <Route exact path='/angebot' component={Funnel} />
                <Route exact path='/landing' component={LandingPage} />
            </Switch>
        );
    }
}

export default AppRoutes;