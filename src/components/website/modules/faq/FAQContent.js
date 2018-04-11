import React, { Component } from 'react'
import Velocity from 'velocity-animate'

class FAQContent extends Component {
    constructor(props) {
        super(props)
        this.currentTab = this.props.currentTab
        this.isCurrentTab = this.isCurrentTab.bind(this)
    }
    isCurrentTab(tab) {
        return this.currentTab === tab
    }
    handleFAQOpen(e) {
        const parent = e.currentTarget.parentNode
        const itemBody = parent.querySelector('.FAQContent-itemBody')
        if (itemBody.style.display === 'block') {
            Velocity(itemBody, 'slideUp', {duration: 300});
            parent.classList.remove('is-active')
        } else {
            Velocity(itemBody, 'slideDown', {duration: 300});
            parent.classList.add('is-active')
        }
    }
    render() {
        return(
            <section className="FAQContent">
                <div className={`FAQContent-body js-FAQContent-body ${this.props.currentTab === 'about' ? 'is-active' : ''}`}>
                    <div className="FAQContent-item">
                        <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                            <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                            <i className="FAQContent-icon"></i>
                        </button>
                        <div className="FAQContent-itemBody">
                            <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                        </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Sieht eines darin ubrig ten ihn getan?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Rostlos das streckte?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>
                </div>

                <div className={`FAQContent-body js-FAQContent-body ${this.props.currentTab === 'policy' ? 'is-active' : ''}`}>
                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Sieht eines darin ubrig ten ihn getan?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Rostlos das streckte?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>
                </div>

                <div className={`FAQContent-body js-FAQContent-body ${this.props.currentTab === 'claims' ? 'is-active' : ''}`}>
                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Rostlos das streckte?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Sieht eines darin ubrig ten ihn getan?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>
                </div>

                <div className={`FAQContent-body js-FAQContent-body ${this.props.currentTab === 'telematic' ? 'is-active' : ''}`}>
                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Rostlos das streckte?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Sieht eines darin ubrig ten ihn getan?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>
                </div>

                <div className={`FAQContent-body js-FAQContent-body ${this.props.currentTab === 'app' ? 'is-active' : ''}`}>
                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Rostlos das streckte?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Gegen er kinde kenne?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>

                    <div className="FAQContent-item">
                    <button onClick={this.handleFAQOpen} className="FAQContent-question js-FAQContent-question">
                        <h1 className="FAQContent-questionText">Sieht eines darin ubrig ten ihn getan?</h1>
                        <i className="FAQContent-icon"></i>
                    </button>
                    <div className="FAQContent-itemBody">
                        <p>Gefallen eigentum schuppen so ei feinheit. Gegen er kinde kenne mu se. Im zu sauber labsal werden en heraus sterne mu. Trostlos der das streckte gefallts ins tag begierig.</p>
                    </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default FAQContent

