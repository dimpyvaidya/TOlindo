import React from 'react'
import './MainRecruit.css'
import iconAppStore from '../../assets/images/ic_appstore.png'
import iconGoogleStore from '../../assets/images/ic_googlestore.png'
import { Link } from 'react-router-dom'

export class MainRecruit extends React.Component {
    render() {
        return (
            <section className="section-main-recruit">
                <h2 className="section-main-recruit-heading">
                    We are Hiring
                    <br />
                    Become a <span>Driver-Biker</span>
                </h2>
                <p className="section-main-recruit-text">
                    Do you have a Car, Bike Or E-scooter? Do you know the city?
                    Do you want to be part of a new Toronto based start-up
                    focused on the best and most reliable delivery service? If
                    so We are looking for you!
                </p>
                <div className="main-app-intro-store-container">
                    <Link
                        to={{
                            pathname:
                                'https://apps.apple.com/in/app/tolindo-driver/id1520192940',
                        }}
                        target="_blank"
                    >
                        <img src={iconAppStore} alt="Appstore link" />
                    </Link>
                    <Link
                        to={{
                            pathname:
                                'https://play.google.com/store/apps/details?id=app.tolindo.driver',
                        }}
                        target="_blank"
                    >
                        <img src={iconGoogleStore} alt="Google store link" />
                    </Link>
                </div>
            </section>
        )
    }
}
