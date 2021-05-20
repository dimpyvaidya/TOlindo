import React from 'react'
import './MainFooter.css'
import iconLogo from '../../assets/images/ic_logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export class MainFooter extends React.Component {
    render() {
        return (
            <footer id="main-footer">
                <div id="main-footer-contact">
                    <a href="tel:4168866029">
                        <span id="main-footer-contact-text">
                            Call us to make order now
                        </span>
                        <br />
                        <span id="main-footer-contact-phone">416 886 6029</span>
                    </a>
                </div>
                <div id="main-footer-logo">
                    <Link id="main-footer-logo-link" to="/">
                        <img
                            id="main-footer-logo-image"
                            src={iconLogo}
                            alt="TOlindo Logo"
                        />
                        <h1 id="main-footer-logo-title">TOlindo</h1>
                    </Link>
                </div>
                <p id="main-footer-text">
                    TOlindo has company branded e-bike employees and owner
                    operator vehicles all the way up to cargo vans for your same
                    day cost effective delivery needs.
                </p>
                <div id="main-footer-social-container">
                    <Link
                        to={{
                            pathname:
                                'https://www.facebook.com/TolindoDeliveries',
                        }}
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className="main-footer-social-container-icon"
                            icon={faFacebookF}
                            color="var(--primary-color)"
                            size="lg"
                        />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                'https://www.instagram.com/tolindo_deliveries/',
                        }}
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className="main-footer-social-container-icon"
                            icon={faInstagram}
                            color="var(--primary-color)"
                            size="lg"
                        />
                    </Link>
                    <Link
                        to={{
                            pathname: 'https://twitter.com/TolindoD',
                        }}
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className="main-footer-social-container-icon"
                            icon={faTwitter}
                            color="var(--primary-color)"
                            size="lg"
                        />
                    </Link>
                </div>
                <p id="main-footer-copyright">
                    <span>TOlindo</span> © All Rights Reserved - 2021
                </p>
            </footer>
        )
    }
}
