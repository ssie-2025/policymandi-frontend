import React from 'react'
import './Banner2.css'
import side_img from '../../assets/banner1.png'

function Banner2() {
    return (
        <section className="banner-hero">
            <div className="hero-text">
                <p className="offer">WELCOME TO POLICYMANDI</p>
                <h1>
                    Your Trusted <br /> Partner for Insurance <br /> Solutions →
                </h1>
                <p className="subtext">
                    Compare, choose, and buy the right insurance policy for your needs. <br />
                    With PolicyMandi, you get access to motor, health, and life insurance plans <br />
                    from top providers — all in one place.
                </p>
                <div className="buttons">
                    <button className="btn-primary">Get started</button>
                    <button className="btn-secondary">Explore Plans</button>
                </div>
                <p className="partners">Trusted by 5,000+ customers across India</p>
            </div>

            <div className="hero-image">
                <img src={side_img} alt="Learning Woman" />
            </div>
        </section>
    )
}

export default Banner2
