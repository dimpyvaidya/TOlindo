import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import './AboutPage.css'

export class AboutPage extends React.Component {
    constructor() {
        super()
        this.headerData = {
            title: 'About us',
            menuNavs: {
                group: {
                    title: 'Home',
                    url: 'home',
                },
                current: {
                    title: 'About us',
                    url: 'about',
                },
            },
        }
    }

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                <ul className="article-list">
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Best courier services in Toronto
                        </h2>
                        <p className="article-list-item-text">
                            Incorporated in 2017, TOlindo is a Toronto-based
                            technology and transportation company merging
                            different markets into one platform of instant
                            deliveries, our TOlindo app marketplace connects
                            people with the best restaurants, fresh food,
                            groceries, convenience stores, pharmacies, and other
                            local businesses within Toronto city. TOlindo now
                            becomes best courier services in Toronto. All you
                            need, just one click away!
                            <br /> We provide expedited delivery and courier
                            service in Toronto Downtown for all customer needs,
                            which includes many major categories in the Courier,
                            Groceries, Pharmacy, Food, and Bazaar sectors.
                            Whether you need an instant service or schedule one,
                            TOlindo covers you with a fleet of company e-bikes,
                            and owner-operators all the way up to cargo vans and
                            trucks for all your delivery needs. Just with one
                            click, we deliver within 30 Minutes in the downtown
                            core!
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Our Commitment to Professionalism
                        </h2>
                        <p className="article-list-item-text">
                            The success of TOlindo Deliveries is due to our
                            dedicated and experienced operations team and the
                            couriers we work with. Our employees and contractors
                            are among the best and most reliable courier
                            services in Toronto and many of them have been with
                            the company for years. We take pride in our
                            reputation of providing the most excellent and
                            high-quality customer service.
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Mission and Values
                        </h2>
                        <p className="article-list-item-text">
                            Building a sustainable partnership for today and
                            tomorrow. From one family business to another family
                            business, we are a community, we care about
                            customers, We deliver exceptional, innovative
                            service offering the most affordable prices. We care
                            about business owners offering updated logistics
                            software to compete in the market keeping low rates.
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Why Choose Us?
                        </h2>
                        <p className="article-list-item-text">
                            Delivery has skyrocketed through COVID. How is your
                            business coping? Have you ever felt helpless because
                            you weren’t able to provide the best service? or
                            perhaps lost a sales opportunity because of late
                            deliveries? Worry no more! Because with TOlindo, you
                            can send flowers, chocolates, gift items, tech
                            items, and anything under the sun in just a matter
                            of 30minutes. TOlindo gives your business an edge by
                            giving your customers the best delivery service
                            throughout Covid-19. Keep your customers in the loop
                            by listing your store within TOlindo E-commerce
                            Marketplace. It’s like having a chauffer of your
                            own! Say hello to your on-demand service that is
                            right for your business. Simply download the app,
                            and use it once you want it! No monthly fees.
                            <br />
                            <br />
                            Let’s chat to get started!
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Why pay more?
                        </h2>
                        <p className="article-list-item-text"></p>
                    </li>
                </ul>
                <MainFooter />
            </div>
        )
    }
}
