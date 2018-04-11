import React, { Component } from 'react'
import image from 'images/gothaer.svg';

class Partnership extends Component {
    render() {
        return(
            <section className="Partnership">
                <div className="Partnership-content">
                    <img className="Partnership-img" src={image} alt="" />

                    <div className="Partnership-body">
                        <p className="Partnership-description">
                            Die Gothaer Allgemeine Versicherung AG ist rechtliche Risikoträgerin des Tarifs. Dadurch erhältst du eine einfache, individuelle und digitale Versicherung, und genießt gleichzeitig den zuverlässigen Schadenservice der Gothaer. Die Kompetenz der Gothaer im Kundenservice spiegelt sich unter anderem durch die Beurteilung ‚sehr gut‘ im ServiceValue.de-Test wider.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partnership