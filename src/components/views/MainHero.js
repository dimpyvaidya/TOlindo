import React from 'react'
import { SlidingFillButton } from './common/SlidingFillButton'
import imgEBike from '../../assets/images/img_ebike.png'
import './MainHero.css'

export class MainHero extends React.Component {
    render() {
        return (
            <section id="main-hero">
                <div id="main-hero-content">
                    <h1 id="main-hero-heading">
                        Fast and Efficient
                        <br />
                        <span>Delivery in Toronto</span>
                    </h1>
                    <p id="main-hero-text">
                        We provide expedited delivery and courier service in
                        Toronto Downtown for all customer needs.
                    </p>
                    <SlidingFillButton id="main-hero-btn" url="/about" />
                </div>
                <figure id="main-hero-image-container">
                    <img src={imgEBike} alt="TOlindo's yellow E-bike" />
                </figure>
            </section>
        )
    }
}
