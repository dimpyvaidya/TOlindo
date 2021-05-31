import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import './ContactPage.css'
import iconLocation from '../../../assets/images/ic_location.svg'
import iconPhone from '../../../assets/images/ic_phone.svg'
import iconEmail from '../../../assets/images/ic_email.svg'
import iconWorkingHours from '../../../assets/images/ic_hours.svg'

export class ContactPage extends React.Component {
    constructor() {
        super()
        this.headerData = {
            title: 'Contacts',
            menuNavs: {
                group: {
                    title: 'Home',
                    url: '',
                },
                current: {
                    title: 'Contacts',
                    url: 'contact',
                },
            },
        }
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        alert(JSON.stringify(this.state))
        // window.open(
        //     `mailto:${this.state.email}?subject=subject&body=${this.state.message}`
        // )
    }

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                <ul className="contacts-list">
                    <li className="contacts-list-item">
                        <div className="contacts-list-item-image-container">
                            <img
                                className="contacts-list-item-image"
                                src={iconLocation}
                                alt=""
                            />
                        </div>
                        <h4 className="contacts-list-item-title">Location</h4>
                        <p className="contacts-list-item-text">
                            Downtown Toronto
                        </p>
                    </li>
                    <li className="contacts-list-item">
                        <div className="contacts-list-item-image-container">
                            <img
                                className="contacts-list-item-image"
                                src={iconPhone}
                                alt=""
                            />
                        </div>
                        <h4 className="contacts-list-item-title">Phone</h4>
                        <p className="contacts-list-item-text">416 886 6029</p>
                    </li>
                    <li className="contacts-list-item">
                        <div className="contacts-list-item-image-container">
                            <img
                                className="contacts-list-item-image"
                                src={iconEmail}
                                alt=""
                            />
                        </div>
                        <h4 className="contacts-list-item-title">Email</h4>
                        <p className="contacts-list-item-text">
                            info@tolindo.ca
                        </p>
                    </li>
                    <li className="contacts-list-item">
                        <div className="contacts-list-item-image-container">
                            <img
                                className="contacts-list-item-image"
                                src={iconWorkingHours}
                                alt=""
                            />
                        </div>
                        <h4 className="contacts-list-item-title">
                            Working Hours
                        </h4>
                        <p className="contacts-list-item-text">
                            Monday to Sunday
                            <br />
                            8:00 AM to 7:00 PM
                        </p>
                    </li>
                </ul>
                <p className="contacts-text">
                    Tolindo’s skilled Virtual Assistant can answer questions
                    from “how can I order” to “how can I become a merchant”. You
                    can also submit requests such as changing a delivery address
                    or even sending a package to a more convenient location for
                    pick up. <br />
                    <br />
                    Our Virtual Assistant is available to you 24/7. Let’s chat.
                    You will tell us your most anxiety-inducing fears about an
                    order or moving and we will smile and say, “We’ll take care
                    of it.” Waiting until the last minute to contact us can lead
                    to sleepless nights worrying about the move.
                </p>
                {/*Map */}
                <form className="contacts-form" onSubmit={this.handleSubmit}>
                    <h2 className="contacts-form-heading">Send Message</h2>
                    <div className="contacts-form-container">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <textarea
                            placeholder="Message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <MainFooter />
            </div>
        )
    }
}
