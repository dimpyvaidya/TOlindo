import React from 'react'
import './MainAppIntroduction.css'
import iconAppStore from '../../assets/images/ic_appstore.png'
import iconGoogleStore from '../../assets/images/ic_googlestore.png'
import { Link } from 'react-router-dom'

export class MainAppIntroduction extends React.Component {
    constructor() {
        super()
        this.titles = [
            'Follow Delivery Status',
            'Order From Any Location',
            'Get Important Notices',
        ]
    }

    render() {
        return (
            <section id="section-main-app-intro">
                <div className="section-main-app-intro-container">
                    <h2 className="main-app-intro-heading">
                        Get More With
                        <span> Our Application</span>
                    </h2>
                    <p className="main-app-intro-text">
                        All your local stores are just one click away. All you
                        need in the TOlindo app, from over the counter
                        medicines, food, groceries, courier, inside bazaar all
                        your favorite stores. A hasseless application has all
                        for you.
                    </p>
                    <div className="main-app-intro-list-container">
                        <ol className="main-app-intro-list">
                            {this.titles.map((item, index) => {
                                return (
                                    <li
                                        className="main-app-intro-list-item"
                                        key={index}
                                    >
                                        <span className="main-app-intro-list-item-number">
                                            {'0' + index}
                                        </span>
                                        <span className="main-app-intro-list-item-title">
                                            {item}
                                        </span>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="main-app-intro-store-container">
                        <Link
                            to={{
                                pathname:
                                    'https://apps.apple.com/in/app/tolindo/id1519808601',
                            }}
                            target="_blank"
                        >
                            <img src={iconAppStore} alt="Appstore link" />
                        </Link>
                        <Link
                            to={{
                                pathname:
                                    'https://play.google.com/store/apps/details?id=app.tolindo.customer',
                            }}
                            target="_blank"
                        >
                            <img
                                src={iconGoogleStore}
                                alt="Google store link"
                            />
                        </Link>
                    </div>
                    {/* App Image */}
                </div>
            </section>
        )
    }
}
