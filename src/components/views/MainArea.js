import React from 'react'
import { AccordionList } from './common/AccordionList'
import './MainArea.css'

export class MainArea extends React.Component {
    constructor() {
        super()
        this.accordionListData = [
            {
                title: 'Green zone - On-demand Delivery service',
                text: 'Our boundaries are East Don Valley Pkwy, West High Park, North Dupont St & all the way south. When using our company-branded E-Bikes we can compromise to pick-up and drop-off in 30 minutes Orange Zone; Within this area 30 minutes pick-ups & drop-off during no rush hour.',
            },
            {
                title: 'Red core',
                text: 'Within this area 30 minutes guarantee pick-up drop-off during the rush hour, when using E-bikes, or you get your money back from your delivery services fee.',
            },
            {
                title: 'Same day delivery service',
                text: 'We pick-up before 12:00 pm noon and deliver by 9:00 pm to residential locations. For special load, sizes, or requirements, please contact TOlindo before placing an order. To open a corporate account please contact us and we will offer you one of the best rates in the market. We compete with quality.',
            },
        ]
    }
    render() {
        return (
            <section className="section-area">
                <div className="sectioin-area-map-info">
                    <h2 className="section-area-heading">
                        TOlindo
                        <br />
                        <span>Operation Area</span>
                    </h2>
                    <p className="section-area-text">
                        We offer a full delivery service from On-Demand to
                        Same-day for all sizes of packages for all business
                        needs within the deliveries industry in the Toronto
                        area. Does your business require a food delivery? We
                        offer on-demand service, Does your business requires a
                        furniture delivery service? We offer same-day delivery
                        service, do not wait till tomorrow.
                    </p>
                    <AccordionList
                        className="section-area-accord-for-large"
                        data={this.accordionListData}
                    />
                </div>
                <div className="section-area-map-container">
                    <iframe
                        className="section-area-map"
                        title="TOlindo Service Area"
                        src="https://www.google.com/maps/d/embed?mid=1rM8Pj2OysptbhJT9VcD-liZwJNuX7IXe"
                    ></iframe>
                </div>
                <AccordionList
                    className="section-area-accord-for-small"
                    data={this.accordionListData}
                />
            </section>
        )
    }
}
