import React from 'react'
import './SubscribePopup.css'

export class SubscribePopup extends React.Component {
    constructor() {
        super()
        this.state = {
            display: 'block',
        }
        this.handleCloseBtn = this.handleCloseBtn.bind(this)
    }

    handleCloseBtn() {
        this.setState({ display: 'none' })
        setTimeout(() => {
            this.setState({ display: 'block' })
        }, 10000)
    }

    render() {
        return (
            <div id="popup_subscribe" style={{ display: this.state.display }}>
                <div
                    id="popup_subscribe_close_btn"
                    onClick={this.handleCloseBtn}
                ></div>
                <h2 id="popup_subscribe_heading">Subscribe to our services</h2>
                <div id="mc_embed_signup">
                    <form
                        action="https://tolindo.us7.list-manage.com/subscribe/post?u=beb7ae6d57b6f8b2cd4ed932c&amp;id=a6296eab6b"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                {/* <label htmlFor="mce-CNAME">Company Name </label> */}
                                <input
                                    type="hidden"
                                    name="CNAME"
                                    className="required"
                                    id="mce-CNAME"
                                />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email</label>
                                <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
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
                                            id="mce-MMERGE6-area"
                                            name="MMERGE6[area]"
                                            maxLength="3"
                                            size="3"
                                            type="text"
                                            placeholder="###"
                                        />
                                    </span>{' '}
                                    <span className="phonedetail1">
                                        <input
                                            className="phonepart required"
                                            pattern="[0-9]*"
                                            id="mce-MMERGE6-detail1"
                                            name="MMERGE6[detail1]"
                                            maxLength="3"
                                            size="3"
                                            type="text"
                                            placeholder="###"
                                        />
                                    </span>{' '}
                                    <span className="phonedetail2">
                                        <input
                                            className="phonepart required"
                                            pattern="[0-9]*"
                                            id="mce-MMERGE6-detail2"
                                            name="MMERGE6[detail2]"
                                            maxLength="4"
                                            size="4"
                                            type="text"
                                            placeholder="####"
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-NAME">Contact Name </label>
                                <input
                                    type="text"
                                    name="NAME"
                                    className="required"
                                    id="mce-NAME"
                                />
                            </div>
                            {/* <div className="mc-field-group">
                                <label htmlFor="mce-MMERGE2">Website </label>
                                <input
                                    type="url"
                                    value=""
                                    name="MMERGE2"
                                    className=" url"
                                    id="mce-MMERGE2"
                                />
                            </div>
                            <div className="mc-field-group">
                                <label htmlFor="mce-MMERGE4">Website </label>
                                <input
                                    type="url"
                                    value=""
                                    name="MMERGE4"
                                    className=" url"
                                    id="mce-MMERGE4"
                                />
                            </div>
                            <div className="mc-field-group input-group">
                                <strong>Email Format </strong>
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            value="html"
                                            name="EMAILTYPE"
                                            id="mce-EMAILTYPE-0"
                                        />
                                        <label htmlFor="mce-EMAILTYPE-0">
                                            html
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            value="text"
                                            name="EMAILTYPE"
                                            id="mce-EMAILTYPE-1"
                                        />
                                        <label htmlFor="mce-EMAILTYPE-1">
                                            text
                                        </label>
                                    </li>
                                </ul>
                            </div> */}
                            <div id="mce-responses" className="clear">
                                <div
                                    className="response"
                                    id="mce-error-response"
                                    style={{ display: 'none' }}
                                ></div>
                                <div
                                    className="response"
                                    id="mce-success-response"
                                    style={{ display: 'none' }}
                                ></div>
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '-5000px',
                                }}
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="b_beb7ae6d57b6f8b2cd4ed932c_a6296eab6b"
                                    tabIndex="-1"
                                />
                            </div>
                            <div className="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
