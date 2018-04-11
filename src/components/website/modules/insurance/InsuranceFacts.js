import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import img1 from '../../../../images/insurance-facts/insurance-fact-img-1.svg'
import img2 from '../../../../images/insurance-facts/insurance-fact-img-2.svg'
import img3 from '../../../../images/insurance-facts/insurance-fact-img-3.svg'
import img4 from '../../../../images/insurance-facts/insurance-fact-img-4.svg'
import img5 from '../../../../images/insurance-facts/insurance-fact-img-5.svg'
import img6 from '../../../../images/insurance-facts/insurance-fact-img-6.svg'
import img7 from '../../../../images/insurance-facts/insurance-fact-img-7.svg'
import Volkasko from '../../../../images/insurance-facts/Volkasko_calculation.svg'
import Teilkasko from '../../../../images/insurance-facts/Teilkasko_calculation.svg'
class InsuranceFacts extends Component {
    render() {
        return(
            <section className="InsuranceFacts">
                <div className="InsuranceFacts-item-top">
                    <img className="InsuranceFacts-img" src={img1} alt="" />
                    <div className="InsuranceFacts-body-top">
                        <h3 className="InsuranceFacts-title">Das Herzstück: Der EMIL-Stick</h3>
                        <p className="InsuranceFacts-desc">Der EMIL-Stecker ermöglicht die Nutzung von Smart-Car Funktionen und die kilometergenaue Abrechnung Deines Versicherungsbeitrags. Du kannst den Stecker schnell und einfach selbst in den OBD-II Anschluss Deines Autos einsetzen. Der OBD-II Anschluss ist rechtlich verpflichtend seit 2001 in Benzin-Neufahrzeugen und seit 2003 in Diesel-Neufahrzeugen verbaut.</p>
                    </div>

                </div>
                <p className="InsuranceFacts-middle">Das Einsetzen des EMIL-Steckers ermöglicht Dir ein Erlebnis, das weit über die Definition von Kfz-Versicherung hinausgeht:</p>
                <div className="back">
                    <div className="InsuranceFacts-item">

                        <div className="InsuranceFacts-body">
                            <h3 className="InsuranceFacts-title">Zahle pro gefahrenem Kilometer</h3>
                            <p className="InsuranceFacts-desc">Mit der EMIL App kannst Du Deinen Versicherungsbeitrag live für jede einzelne Fahrt einsehen. Die Abrechnung erfolgt monatlich: Geringer Grundbeitrag  + wenige Cent pro Kilometer. </p>
                        </div>
                        <img className="InsuranceFacts-img" src={img2} alt="" />
                    </div>
                </div>
                <div className="InsuranceFacts-item">
                    <img className="InsuranceFacts-img" src={img3} alt="" />
                    <div className="InsuranceFacts-body">
                        <h3 className="InsuranceFacts-title">Bis zu 450€ jährlich sparen</h3>
                        <p className="InsuranceFacts-desc">Alle die durchschnittlich unter 200 km pro Woche fahren, können mit EMIL sparen. Das sind laut offiziellen Umfragen ca. 50% aller Autofahrer in Deutschland. Bist auch Du dabei? Berechne deinen Beitrag innerhalb von 80 Sekunden und erfahre, wie viel Du mit EMIL sparen könntest.

                        </p>
                    </div>
                </div>
                <div className="back">
                <div className="InsuranceFacts-item">

                    <div className="InsuranceFacts-body">
                        <h3 className="InsuranceFacts-title">Unabhängig vom Fahrstil</h3>
                        <p className="InsuranceFacts-desc">Bei anderen Telematik-Anbietern wird die Höhe des Versicherungsbeitrags durch dein Fahrverhalten beeinflusst. Nicht bei EMIL. Wir glauben, dass du selbst am besten weißt welcher Fahrstil angebrach ist und vertrauen auf deine Umsicht und Urteilskraft.</p>
                    </div>
                    <img className="InsuranceFacts-img" src={img4} alt="" />
                </div>
                </div>
                <div className="InsuranceFacts-tabs">
                    <h3>EMIL bietet zwei einfach-verständliche Tarife an:</h3>
                    <Tabs>
                        <TabList>
                            <Tab>Teilkasko</Tab>
                            <Tab>Volkasko</Tab>
                        </TabList>

                        <TabPanel>
                            <p>Die Kfz-Haftpflichtversicherung ist für in Deutschland zugelassene Autos verpflichtend und deckt Schäden ab, die Du mit Deinem Fahrzeug Dritten zufügen könntest.
                                Die Teilkasko Versicherung enthält bei EMIL auch immer die Haftpflicht-Versicherung und deckt unter anderem durch Diebstahl und Brand entstandene Schäden ab. Auch Elementarereignisse wie Hagel sowie Glasbruch, zum Beispiel nach einem Steinschlag, gehören dazu.
                                <br/><br/>
                                Mehr dazu in unseren <span>AKBs</span>.
                            </p>
                            <h5>Beispielwerte</h5>
                            <img className="tabs-img" src={Teilkasko} alt="Teilkasko calculation" />
                            <div>
                                <Link to="/angebot" className="Button Button--blue Button--inlineBlock">Meinen Beitrag berechnen</Link>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>Die Kfz-Haftpflichtversicherung ist für in Deutschland zugelassene Autos verpflichtend und deckt Schäden ab, die Du mit Deinem Fahrzeug Dritten zufügen könntest.
                                Die Vollkasko Versicherung enthält bei EMIL auch immer die Haftpflicht-Versicherung, es sind alle Leistungen der Teilkasko inklusive und dein Auto ist gegen Schäden abgesichert, die du selbst verursachst. Außerdem greift die Vollkasko bei Vandalismus oder wenn ein Unfallverursacher nicht ermittelt werden kann.
                                <br/><br/>
                                Mehr dazu in unseren <span>AKBs</span>.

                            </p>
                            <h5>Beispielwerte</h5>
                            <img className="tabs-img" src={Volkasko} alt="Volkasko calculation" />
                            <div>
                            <Link to="/angebot" className="Button Button--blue Button--inlineBlock">Meinen Beitrag berechnen</Link>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className="back">
                <div className="InsuranceFacts-item">

                    <div className="InsuranceFacts-body">
                        <h3 className="InsuranceFacts-title">Monatlich kündbar</h3>
                        <p className="InsuranceFacts-desc">Wir bieten Dir die Möglichkeit Deinen Vertag monatlich zu kündigen, weil wir glauben, dass Du gar nicht mehr wechseln möchtest, wenn Du einmal mit EMIL gefahren bist. </p>
                    </div>
                    <img className="InsuranceFacts-img" src={img5} alt="" />
                </div>
                </div>
                <div className="car-driving-back">
                    <div className="InsuranceFacts-item-car">
                        <div className="InsuranceFacts-body">
                            <h3 className="InsuranceFacts-title">Unfallfrei fahren und noch mehr sparen</h3>
                            <p className="InsuranceFacts-desc">Schadensfreiheitsklassen adé. Mit EMIL musst du nicht 12 Monate auf eine Preisreduktionen warten - EMIL reduziert deinen Versicherungsbeitrag  alle 2.500 km, die Du schadenfrei zurücklegst.
                                Für den Fall, dass Du EMIL einmal verlassen möchtest führen wir deine Schadenfreiheitsklasse natürlich im Hintergrund weiter und bestätigen diese dann Deiner neuen Versicherung.
                                Im Falle eines Schadens fällt ein einheitlicher Schadenzuschlag an.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="last-section">
                <div className="InsuranceFacts-item">

                    <div className="InsuranceFacts-body">
                        <h3 className="InsuranceFacts-title">Unbegrenzt und flexibel Zusatzfahrer wählen</h3>
                        <p className="InsuranceFacts-desc">Mit EMIL kann dein Auto bedenkenlos von Freunden und Bekannten gefahren werden. Bei deiner Buchung teilst du uns eine Altersspanne möglicher Zusatzfahrer mit. Alle Personen, die in die angegebene Altersgruppe fallen und mit deinem Auto fahren, sind automatisch mit EMIL versichert. </p>
                    </div>
                    <img className="InsuranceFacts-img" src={img7} alt="" />

                </div>
                </div>

            </section>

        )
    }
}

export default InsuranceFacts