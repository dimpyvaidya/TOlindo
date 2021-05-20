import React from 'react'
import { Link } from 'react-router-dom'
import './MainSubscribeNewsLetter.css'
import iconSubscribe from '../../assets/images/ic_subscribe.svg'

export class MainSubscribeNewsLetter extends React.Component {
    render() {
        return (
            <section className="section-subscribe-newsletter">
                <img
                    className="section-subscribe-newsletter-image"
                    src={iconSubscribe}
                    alt=""
                />
                <h2 className="section-subscribe-newsletter-heading">
                    We are Open for Business
                    <br />
                    <span>Subscribe to get started</span>
                </h2>
                <Link
                    className="section-subscribe-newsletter-button"
                    to={{
                        pathname:
                            'https://tolindo.us7.list-manage.com/subscribe?u=beb7ae6d57b6f8b2cd4ed932c&id=a6296eab6b',
                    }}
                    target="_blank"
                >
                    Subscribe
                </Link>
            </section>
        )
    }
}
