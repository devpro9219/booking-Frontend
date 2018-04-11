import React, { Component } from 'react'

class PurpleBanner extends Component {
    render() {
        return(
            <section className="PurpleBanner">
                <h3 className="PurpleBanner-title">{this.props.title}</h3>
                <p dangerouslySetInnerHTML={{__html: this.props.description}} className="PurpleBanner-description"></p>
                <button  className="Button Button--transparent Button--white js-getQuoteButton">{this.props.callToAction}</button>
            </section>
        )
    }
}

export default PurpleBanner