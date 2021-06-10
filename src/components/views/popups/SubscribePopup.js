import React from 'react'
import axios from 'axios'
import './SubscribePopup.css'

export class SubscribePopup extends React.Component {
    constructor() {
        super()
        this.state = {
            display: 'block',
            formVisible: true,
        }
        this.handleCloseBtn = this.handleCloseBtn.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleCloseBtn() {
        this.setState({ display: 'none', formVisible: true })
        setTimeout(() => {
            this.setState({ display: 'block' })
        }, 10000)
    }

    handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        data.phone =
            document.querySelector('#subscribe_popup_phone_1').value +
            '-' +
            document.querySelector('#subscribe_popup_phone_2').value +
            '-' +
            document.querySelector('#subscribe_popup_phone_3').value

        // console.log(data)

        axios
            .post(
                `https://a84l7b7lrl.execute-api.us-east-2.amazonaws.com/api/v1/subscribers`,
                data
            )
            .then((res) => {
                // console.log(res.data)
                if (res.data.statusCode === 200) {
                    this.setState({ formVisible: false })
                } else if (
                    res.data.statusCode === 400 &&
                    res.data.title === 'Member Exists'
                ) {
                    data.status = 'subscribed'
                    axios
                        .patch(
                            `https://a84l7b7lrl.execute-api.us-east-2.amazonaws.com/api/v1/subscribers`,
                            data
                        )
                        .then((res) => {
                            // console.log(res.data)
                            this.setState({ formVisible: false })
                        })
                }
            })
    }

    render() {
        return (
            <div id="popup_subscribe" style={{ display: this.state.display }}>
                <div
                    id="popup_subscribe_close_btn"
                    onClick={this.handleCloseBtn}
                ></div>
                <div
                    id="popup_subscribe_form"
                    style={{
                        display: this.state.formVisible ? 'block' : 'none',
                    }}
                >
                    <h2 id="popup_subscribe_heading">
                        Subscribe to our services
                    </h2>
                    <div id="mc_embed_signup">
                        <form
                            className="validate"
                            target="_blank"
                            // noValidate
                            onSubmit={this.handleSubmit}
                        >
                            <div id="mc_embed_signup_scroll">
                                <div className="mc-field-group">
                                    <label htmlFor="subscribe_popup_email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="required email"
                                        id="subscribe_popup_email"
                                    />
                                </div>
                                <div className="mc-field-group size1of2">
                                    <label htmlFor="mce-MMERGE6">
                                        Phone Number{' '}
                                    </label>
                                    <div className="phonefield phonefield-us">
                                        <span className="phonearea">
                                            <input
                                                className="phonepart required"
                                                pattern="[0-9]*"
                                                maxLength="3"
                                                size="3"
                                                type="text"
                                                placeholder="###"
                                                id="subscribe_popup_phone_1"
                                            />
                                        </span>{' '}
                                        <span className="phonedetail1">
                                            <input
                                                className="phonepart required"
                                                pattern="[0-9]*"
                                                maxLength="3"
                                                size="3"
                                                type="text"
                                                placeholder="###"
                                                id="subscribe_popup_phone_2"
                                            />
                                        </span>{' '}
                                        <span className="phonedetail2">
                                            <input
                                                className="phonepart required"
                                                pattern="[0-9]*"
                                                maxLength="4"
                                                size="4"
                                                type="text"
                                                placeholder="####"
                                                id="subscribe_popup_phone_3"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="subscribe_popup_name">
                                        Contact Name{' '}
                                    </label>
                                    <input
                                        type="text"
                                        className="required"
                                        id="subscribe_popup_name"
                                        name="name"
                                    />
                                </div>
                                <div className="clear">
                                    <input
                                        type="submit"
                                        value="Subscribe"
                                        className="button"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    id="popup_subscribe_thanks"
                    style={{
                        display: this.state.formVisible ? 'none' : 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <h2 style={{ fontWeight: 'normal', fontSize: '1.2rem' }}>
                        Thanks for subscribing!
                    </h2>
                </div>
            </div>
        )
    }
}
