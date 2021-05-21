import React from 'react'
import './MainSectionFourFeatures.css'
// import iconFastDelivery from '../../assets/images/ic_fast_delivery.svg'
// import iconMobileApp from '../../assets/images/ic_mobile_app.svg'
// import iconWideCoverageMap from '../../assets/images/ic_wide_coverage_map.svg'
// import iconReliableFleet from '../../assets/images/ic_reliable_fleet.svg'
import iconFastDelivery from '../../assets/images/ic_fast_delivery.png'
import iconMobileApp from '../../assets/images/ic_mobile_app.png'
import iconWideCoverageMap from '../../assets/images/ic_wide_coverage_map.png'
import iconReliableFleet from '../../assets/images/ic_reliable_fleet.png'

export class MainSectionFourFeatures extends React.Component {
    render() {
        return (
            <section className="section-four-features">
                <h2 className="section-four-features-heading">
                    Sit at Home
                    <br />
                    <span>We Will Take Care</span>
                </h2>
                <p className="section-four-features-text">
                    Gain extra hours in a day, all you may need in one app.
                    Either it is groceries, medicines or a last minute gift,
                    TOlindo has it all!
                </p>
                <ul className="section-four-features-list">
                    <li className="section-four-features-list-item">
                        <div className="section-four-features-list-item-image-container">
                            <img
                                className="section-four-features-list-item-image"
                                id="section-four-features-list-item-image-clock"
                                src={iconFastDelivery}
                                alt=""
                            />
                        </div>
                        <h4 className="section-four-features-list-item-title">
                            Fast
                            <br />
                            Delivery
                        </h4>
                    </li>
                    <li className="section-four-features-list-item">
                        <div className="section-four-features-list-item-image-container">
                            <img
                                className="section-four-features-list-item-image"
                                id="section-four-features-list-item-image-mobile"
                                src={iconMobileApp}
                                alt=""
                            />
                        </div>
                        <h4 className="section-four-features-list-item-title">
                            Amazing
                            <br />
                            Mobile App
                        </h4>
                    </li>
                    <li className="section-four-features-list-item">
                        <div className="section-four-features-list-item-image-container">
                            <img
                                className="section-four-features-list-item-image"
                                src={iconWideCoverageMap}
                                alt=""
                            />
                        </div>
                        <h4 className="section-four-features-list-item-title">
                            Wide
                            <br />
                            Delivery Range
                        </h4>
                    </li>
                    <li className="section-four-features-list-item">
                        <div className="section-four-features-list-item-image-container">
                            <img
                                className="section-four-features-list-item-image"
                                src={iconReliableFleet}
                                alt=""
                            />
                        </div>
                        <h4 className="section-four-features-list-item-title">
                            Reliable
                            <br />
                            Fleet
                        </h4>
                    </li>
                </ul>
            </section>
        )
    }
}
