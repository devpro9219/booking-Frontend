import React from 'react';

const Imprint = () => {
    return (
        <section className="Imprint">
            <article className="Imprint-content">
                <h1>Impressum</h1>
                <p>
                    EMIL Deutschland AG <br />
                    Schönhauser Allee 45a<br />
                    10437 Berlin
                </p>
                <p>
                    Vorstand: Justus Beike
                </p>
                <p>
                    Handelsregister <br />
                    Registergericht: Berlin-Charlottenburg <br />
                    Registernummer: HRB 184356 B
                </p>
                <p>
                    Telefon: 080012345678 <br />
                    Telefax: 0301234567 <br />
                    E-Mail: <a href="mailto:hallo@emil.de">hallo@emil.de</a>
                </p>
                <p className="u-textBold">
                    Verantwortlicher für journalistisch-redaktionelle Inhalte gem. § 55 II RstV: Justus Beike (Anschrift wie oben)
                </p>
                <h2>Schlichtungsstellen</h2>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br />
                    <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a> <br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum. <br />
                </p>
                <p>
                    Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Die <br />
                    zuständige Verbraucherschlichtungsstelle ist: <br />
                </p>
                <p>
                    Versicherungsombudsmann e. V. <br />
                    Postfach 08 06 32 <br />
                    10006 Berlin <br />
                    <a href="http://www.versicherungsombudsmann.de/">http://www.versicherungsombudsmann.de/</a>
                </p>
                <p>
                    Wir weisen darauf hin, dass wir nicht dazu verpflichtet sind an einem Streitbeilegungsverfahren teilzunehmen.
                </p>
                <h2>
                    Erlaubnis § 34 d GewO
                </h2>
                <p>
                    Die EMIL Deutschland AG ist Versicherungsvermittler mit Erlaubnispflicht nach § 34d Abs. 1 GewO. Registrierungsnummer: D-0I2T-O84K8-66. <br />
                    Das Versicherungsvermittlerregister können Sie hier einsehen: www.vermittlerregister.info
                </p>
                <h2>
                    Aufsichtsbehörde
                </h2>
                <p>
                    Industrie- und Handelskammer Berlin <br />
                    Fasanenstraße 85 <br />
                    10623 Berlin www.ihk-berlin.de
                </p>
                <h2>
                    Berufsrechtliche Regelungen
                </h2>
                <ul>
                    <li>
                        § 34d Gewerbeordnung (GewO)
                    </li>
                    <li>
                        §§ 59-68 Gesetz über den Versicherungsvertrag (VVG)
                    </li>
                    <li>
                        Verordnung über die Versicherungsvermittlung und -beratung (VersVermV)
                    </li>
                </ul>
                <p>
                    Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebene Homepage www.gesetze-im-internet.de eingesehen werden.
                </p>
            </article>
        </section>
    );
};

export default Imprint;