import React, { Component } from 'react'

class ContentHeader extends Component {
    render() {
        return(
            <header className="ContentHeader">

                <div className="ContentHeader-wrapper">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>

                <h1 className="ContentHeader-title">Emil: Kfz-Versicherung neu erleben</h1>
                <h2 className="ContentHeader-subTitle">It was about time.</h2>
                <p className="ContentHeader-description">EMIL bietet die erste KFZ-Versicherung an, bei der du nur für das zahlst, was du auch wirklich fährst. Je weniger du fährst, desto weniger musst du zahlen.</p>
            </header>
        )
    }
}

export default ContentHeader