import React, { Component } from 'react'
import Footer from '../../../shared/Footer'
class Page extends Component {
    render() {
        return (
            <main className="MainContainer">
                <div className="MainContainer-wrapper">
                    {this.props.children}
                </div>
                <Footer />
            </main>
        )
    }
}

export default Page