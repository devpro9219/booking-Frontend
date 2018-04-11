import React, { Component } from 'react'
import benefit1 from '../../../../images/benefits-banner/benefit-img-1.svg'
import benefit4 from '../../../../images/benefits-banner/benefit-img-4.svg'
import benefit7 from '../../../../images/benefits-banner/benefit-img-7.svg'

class BenefitsBanner extends Component {
    renderBanners() {
        const bannerData = [
            {
                title: 'Geld sparen',
                text: 'Wenn Du durchschnittlich weniger als 200 km pro Woche Auto fährst, kannst Du mit EMIL bis zu 450€ jährlich sparen. Fortschrittliche Telematik-Technologie macht es möglich.',
                image: benefit4,
                cta: '/insurance', CtaName: 'Mehr zum Versicherungsmodell erfahren'
            },
            {
                title: 'Smart-Car Funktionen genießen',
                text: 'Mit der EMIL App kannst Du Deinen Versicherungsbeitrag für jede einzelne Fahrt nachvollziehen. Etliche weitere Smart-Car Funktionen verbessern Dein Fahrerlebnis!',
                image: benefit1,
                cta: '/insurance' , CtaName: 'Alle App-Funktionen kennenlernen'
            },
            {
                title: 'Zuverlässig versichert sein',
                text: 'Die Gothaer Allgemeine Versicherung AG ist Risikoträgerin des Tarifs und wird sich im Schadenfall um deine Anliegen kümmern. Zuverlässigkeit und Professionalität stehen für uns an erster Stelle!',
                image: benefit7,
                cta: '/claim' , CtaName: 'Mehr zum Schadensservice erfahren'
            }
        ]

        return bannerData.map((banner, index) => {
            let cta = banner.cta ? <a className="BenefitsBanner-cta" href={banner.cta}>{banner.CtaName} </a> : ''

            return (
                <div key={index} className="BenefitsBanner-item">
                    <img className="BenefitsBanner-img" src={banner.image} alt={banner.title} />
                    <h3 className="BenefitsBanner-itemTitle">{banner.title}</h3>
                    <p className="BenefitsBanner-desc">{banner.text}</p>
                    {cta}
                </div>
            )
        })
    }
    render() {
        return(
            <section className="BenefitsBanner js-BenefitsBanner">

                <h2 className="BenefitsBanner-title">Das sind EMIL's Vorteile auf einen Blick</h2>

                <div className="BenefitsBanner-body">
                    { this.renderBanners() }
                </div>

            </section>
        )
    }
}

export default BenefitsBanner