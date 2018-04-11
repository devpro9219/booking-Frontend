import React, { Component } from 'react'
import slideImage from '../../../../images/slide-placeholder.png'
class QuotationBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            slides: [
                {
                    title: 'Abhijit Naskar',
                    text: 'The optimist sees the glass as half full, the pessimist as half empty. What I see is water that can save someone\'s life.',
                    image: slideImage
                },
                {
                    title: 'Abhijit Naskar',
                    text: 'The optimist sees the glass as half full, the pessimist as half empty. What I see is water that can save someone\'s life.',
                    image: slideImage
                },
                {
                    title: 'Abhijit Naskar',
                    text: 'The optimist sees the glass as half full, the pessimist as half empty. What I see is water that can save someone\'s life.',
                    image: slideImage
                },
            ]
        }
        this.checkActiveSlide = this.checkActiveSlide.bind(this)
    }
    componentDidMount() {
        setInterval(this.changeSlide.bind(this),7500)
    }
    checkActiveSlide(index){
        return index === this.state.activeSlide
    }
    changeSlide() {
        const nextSlide = this.state.activeSlide >= 2 ? 0 : this.state.activeSlide + 1
        this.setState({
            activeSlide: nextSlide
        })
    }
    goToSlide(slide){
        this.setState({
            activeSlide: slide
        })
    }
    renderSlides() {
        return this.state.slides.map((slide, index) => {
            return (
                <blockquote key={index} className={`QuotationBanner-quote js-QuotationBanner-quote ${this.checkActiveSlide(index) ? 'is-active' : ''}`}>
                        <img className="QuotationBanner-image" src={slide.image} alt={slide.title} />
                        <cite className="QuotationBanner-quoteAuthor">{slide.title}</cite>
                        <q>{slide.text}</q>
                </blockquote>
            )
        }) 
    }
    renderNav() {
        let nav = []
        for(let i = 0; i < this.state.slides.length; i++){
            nav.push(<li onClick={ _ => this.goToSlide(i) } key={i} className={`${this.checkActiveSlide(i) ? 'is-active' : ''}`}><i></i></li>)
        }
        return nav
    }
    render() {
        return(
            <section className="QuotationBanner">
                <div className="QuotationBanner-container">
                    {this.renderSlides()}
                </div>

                <ul className="QuotationBanner-counter js-QuotationBanner-counter">
                    {this.renderNav()}
                </ul>
            </section>
        )
    }
}

export default QuotationBanner