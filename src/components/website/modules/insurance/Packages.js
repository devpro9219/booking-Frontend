import React, { Component } from 'react'
import img1 from '../../../../images/packages/package-1.svg'
import img2 from '../../../../images/packages/package-2.svg'
import img3 from '../../../../images/packages/package-3.svg'
import Visible from '../../../../lib/visible'

class Packages extends Component {
    componentDidMount() {
        const packages = document.querySelectorAll('.Packages-item')
        for(let p of packages) {
            Visible.register(p, this.registerPackage(p))
        }
    }
    registerPackage(p) {
        return function(){
            p.classList.add('is-visible')
        }
    }
    render() {
        return(
            <section className="Packages js-Packages">
                <header className="ContentHeader">
                    <h1 className="ContentHeader-title">Choose what suits you best.</h1>
                    <h2 className="ContentHeader-subTitle">It's all modular</h2>
                    <p className="ContentHeader-description">We have some pre-defined packages, however, they are still modular. These are three of them</p>
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
                </header>
                <div className="Packages-item js-Packages-item-1">
                    <img className="Packages-img" src={img1} alt="" />
                    <h3 className="Packages-title">Halpflicht</h3>
                    <p className="Packages-desc">Haftpflicht - this is basically a third-party liability insurance</p>
                </div>
                <div className="Packages-item js-Packages-item-2">
                    <img className="Packages-img" src={img2} alt="" />
                    <h3 className="Packages-title">Teilkasko</h3>
                    <p className="Packages-desc">Teilkasko - Haftpflicht plus insurance against things that happen to your own car you are not in control of such as theft, storm loss, etc.</p>
                </div>
                <div className="Packages-item js-Packages-item-3">
                    <img className="Packages-img" src={img3} alt="" />
                    <h3 className="Packages-title">Volkasko</h3>
                    <p className="Packages-desc">Volkasko - Halftpflicht + Teilkasko plus insurance against all damages to your own car you have caused yourself, i.e. you caused an accident</p>
                </div>
            </section>

        )
    }
}

export default Packages