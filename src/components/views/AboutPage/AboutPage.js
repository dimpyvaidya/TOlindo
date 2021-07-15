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
                    url: '',
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
                        Incorporated in 2017, TOlindo is a Toronto-based technology and transportation company merging different markets into one platform of instant deliveries. Our TOlindo application's marketplace connects people with restaurants, fresh food, groceries, convenience stores, pharmacies, and other local businesses within Toronto city.
                        <br/> All you need, just one click away! 
                        <br/>TOlindo provides expedited delivery and courier service in downtown Toronto in the Groceries, Pharmacy, Food, and Bazaar sectors. Whether you need an instant delivery or a scheduled one, TOlindo covers you with a fleet of company e-bikes and owner-operators up to cargo vans and trucks for all your delivery needs. 
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Our Commitment to Professionalism
                        </h2>
                        <p className="article-list-item-text">
                        TOlindo board members have 15+ years of experience in the Canadian transportation industry, working with large corporations such as... 

We take pride in our reputation of providing the most excellent and high-quality customer service.
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Mission and Values
                        </h2>
                        <p className="article-list-item-text">
                        Our mission is to develop sustainable and mutually beneficial partnerships with local business owners. From one family business to another, we are a community! We care about our clients and aim to deliver exceptional, innovative service while offering affordable prices. 
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Why Choose Us?
                        </h2>
                        <p className="article-list-item-text">
                        TOlindo provides your business with an edge by giving your customers the best delivery service throughout Covid-19. Keep your customers in the loop by listing your items/products in your TOlindo E-commerce Marketplace store. Download the TOlindo app and register your business for free! 
                         
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                        Let us do the work! 
                        </h2>
                        <p className="article-list-item-text">
                        When you register your business with us, we will send a representative to help you set up your e-store, upload products, offer promotions and guide you on app navigation. You will receive a company-branded tablet to help you manage your store from anywhere! 
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                        Get ready for a unique <br/>Customer Service experience! 
                        </h2>
                        <p className="article-list-item-text">
                        Customer service is at the top of TOlindo's priority. We promise to go out of our way to guarantee our clients' satisfaction! Since our office locates in the heart of downtown Toronto, we will always make time to send a representative to help you in person, over the phone or via email, depending on your preferences.                          </p>
                    </li>
                </ul>
                <MainFooter />
            </div>
        )
    }
}
