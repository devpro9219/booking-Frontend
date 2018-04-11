import React, { Component } from 'react'
class BannerLeft extends Component {
    render() {
        return(
            <section className="ShowcaseBanner js-ShowcaseBanner">
                <div className="ShowcaseBanner-container">
                    <div className="ShowcaseBanner-half ShowcaseBanner-half--primary">
                    <i className="ShowcaseBanner-icon ShowcaseBanner-icon--a">
                        <img src={this.props.icon} alt="" />
                    </i>
                    <h1 className="ShowcaseBanner-title">{this.props.title}</h1>
                    <h2 className="ShowcaseBanner-subTitle">{this.props.text}</h2>
                    </div>
                    <div className="ShowcaseBanner-half ShowcaseBanner-half--screenshot ShowcaseBanner-half--screenshot--a">
                        <img className="ShowcaseBanner-img" src={this.props.image} alt="" />
                    </div>
                </div>
            </section>
        )
    }
}

export default BannerLeft