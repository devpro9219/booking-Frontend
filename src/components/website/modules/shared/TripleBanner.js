import React, { Component } from 'react'
import Visible from '../../../../lib/visible'

class TripleBanner extends Component {
    componentDidMount() {
        this.registerTripleBanner()
    }
    registerTripleBanner() {
        const tripleBanner = document.querySelector('.TripleBanner')
        Visible.register(tripleBanner, () => {
            tripleBanner.classList.add('is-visible')
        })
    }
    renderBanner() {
        const banners = this.props.content.banners || []
        const bannersComponent = banners.map((banner, index) => {
            return(
                <li key={index}>
                        <img src={banner.image} alt={banner.title} className="TripleBanner-img" />
                        <h4 className="TripleBanner-text">{banner.title}</h4>
                        <span className="TripleBanner-desc">{banner.text}</span>
                </li>
            )
        })

        return(
            <ul className="TripleBanner-banners">
                    { bannersComponent }
            </ul>
        )
    }
    render() {
        const icon = this.props.content.icon
        const title = this.props.content.title
        return(
            <section className="TripleBanner js-TripleBanner">
                <i className="TripleBanner-icon">
                    <img src={icon} alt={title} />
                </i>
                <h3 className="TripleBanner-title">{title}</h3>
                { this.renderBanner() }
            </section>
        )
    }
}

export default TripleBanner