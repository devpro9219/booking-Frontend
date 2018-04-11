import React, { Component } from 'react'
import img1 from 'images/steps/icon_claim_phone.svg';
import img2 from 'images/steps/icon_claim_camera.svg';
import img3 from 'images/steps/icon_claim_check.svg';
import img4 from 'images/steps/icon_claim_repair.svg';
import Visible from 'lib/visible';

class Steps extends Component {
    componentDidMount() {
        const steps = document.querySelectorAll('.Step')
        for(let step of steps) {
            Visible.register(step, this.registerStep(step))
        }
    }
    registerStep(step) {
        return function(){
            step.classList.add('is-visible')
        }
    }
    render() {
        return(
            <section className="Steps">
                <div className="Step js-Step-1">
                    <img src={img1} alt="Step 1" className="Step-img" />
                    <h4 className="Step-title">Schritt 1</h4>
                    <p className="Step-desc">Schaden über die App/telefonisch melden.</p>
                </div>
                <div className="Step js-Step-2">
                    <img src={img2} alt="Step 2" className="Step-img" />
                    <h4 className="Step-title">Schritt 2</h4>
                    <p className="Step-desc">Wenn nötig, Dokumente und Fotos einreichen.</p>
                </div>
                <div className="Step js-Step-3">
                    <img src={img3} alt="Step 3" className="Step-img" />
                    <h4 className="Step-title">Schritt 3</h4>
                    <p className="Step-desc">Bestätigung der Kostenübernahme erhalten.</p>
                </div>
                <div className="Step js-Step-4">
                    <img src={img4} alt="Step 4" className="Step-img" />
                    <h4 className="Step-title">Schritt 4</h4>
                    <p className="Step-desc">Dein Auto von einer unserer ausgewählten Partner-Werkstätten zuverlässig und schnell reparieren lassen.</p>
                </div>
            </section>
        )
    }
}

export default Steps