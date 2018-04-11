import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class JoinEmil extends Component {
    render() {
        return (
            <section className="Join">
                <h2 className="Join-title">Join Emil today and start enjoying the benefits</h2>
                <Link to='/angebot' className="Button Button--inlineBlock">Angebot berechnen</Link>

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
            </section>
        );
    }
}

export default JoinEmil;