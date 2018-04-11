import React, { Component } from 'react'

class DrivingBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0
        }
        this.checkActiveSlide = this.checkActiveSlide.bind(this)
    }
    componentDidMount() {
        setInterval(this.changeSlide.bind(this),4500)
    }
    checkActiveSlide(index){
        return index === this.state.activeSlide
    }
    changeSlide() {
        const nextSlide = this.state.activeSlide === 0 ? 1 : 0
        this.setState({
            activeSlide: nextSlide
        })
    }
    render() {
        return(
            <section className="DrivingBanner">
                <div className="DrivingBanner-container">
                    <i className="DrivingBanner-car"></i>
                    <div className="DrivingBanner-wrapper">
                        <div className={`DrivingBanner-slide ${this.checkActiveSlide(0) ? 'active' : ''}`}>
                            <strong>Drive more daily</strong>
                            <p>After 200km on one day, we stop counting kilometers.</p>
                        </div>
                        <div className={`DrivingBanner-slide ${this.checkActiveSlide(1) ? 'active' : ''}`}>
                            <strong>Pay as you drive</strong>
                            <p>Pay a monthly base fee plus a fee for every driven km</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DrivingBanner