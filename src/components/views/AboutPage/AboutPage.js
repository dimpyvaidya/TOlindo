import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import './AboutPage.css'
import FAQData from '../FAQPage/FAQData.json'
import { AccordionList } from '../common/AccordionList'
import nabiaimg from '../../../assets/images/nabia2.jpg'
import iconLocation from '../../../assets/images/ic_location.svg'
import iconPhone from '../../../assets/images/ic_phone.svg'
import iconEmail from '../../../assets/images/ic_email.svg'
import iconWorkingHours from '../../../assets/images/ic_hours.svg'


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
        alert("Thank you! We will get back to you soon.")
        //alert(JSON.stringify(this.state))
        // window.open(
        //     `mailto:${this.state.email}?subject=subject&body=${this.state.message}`
        // )
    }
    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                
                {/* About section */}
                <section id="about">
                <ul className="article-list">
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Best courier services in Toronto
                        </h2>
                        <p className="article-list-item-text">
                            Incorporated in 2017, TOlindo is a Toronto-based technology and transportation company merging different markets into one platform of instant deliveries. Our TOlindo application's marketplace connects people with restaurants, fresh food, groceries, convenience stores, pharmacies, and other local businesses within Toronto city. <br/>All you need, just one click away!
                            <br/>TOlindo provides expedited delivery and courier service in downtown Toronto in the Groceries, Pharmacy, Food, and Bazaar sectors. Whether you need an instant delivery or a scheduled one, TOlindo covers you with a fleet of company e-bikes and owner-operators up to cargo vans and trucks for all your delivery needs.                       
                        </p>
                    </li>
                    <li className="article-list-item">
                        <h2 className="article-list-item-heading">
                            Our Commitment to Professionalism
                        </h2>
                        <p className="article-list-item-text">
                            TOlindo board members have 12+ years of experience in the Canadian transportation industry, working with corporations such as Espolon Transport Inc, Proback transport and Yellow Squad Inc. We take pride in our reputation of providing the most excellent and high-quality customer service.
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
                            Why TOlindo?
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
                        Customer service is at the top of TOlindo's priority. We promise to go out of our way to guarantee our clients' satisfaction! Since our office locates in the heart of downtown Toronto, we will always make time to send a representative to help you in person, over the phone or via email, depending on your preferences.                   
                        </p>                     
                     </li>
                </ul>

                {/* Women owner section */}
                <section id="ceo">
                <section id="section-main-app-intro">
                <div className="section-main-app-intro-container">
                    <h2 className="main-app-intro-heading">
                        Women-led business
                    </h2><br/>
                    <div className="container">
                    <img src={nabiaimg} alt="workwithus2" className="owner-img"/>
                    <p  className="article-list-item-text2">
                        <b>Nabia Romero</b> founded <b>TOlindo in 2017</b> and ever since has been acting as the CEO of the company. As an immigrant, Nabia had to adapt to the Canadian market and the transportation industry standards. She and her family has + 30 years working in the transportation business in Canada, Spain and South America. Currently, Nabia is working on expanding her business while offering new services that are tailor-made for Toronto's downtown community. She is interested in giving back to society and supporting small local businesses, as she values the development & growth of the Canadian economy. Moreover, Nabia is passionate about providing green services and reducing pollution as much as possible by using TOlindo's fleet of e-bikes, which she intends to provide to TOlindo's selected delivery partners.
                    </p>
                    </div>
                </div>
                </section>
                </section>
                </section>

                {/* FAQs section */}
                <section id="faq">
                <ul className="article-list">
                    <li className="article-list-item">
                        <h1 className="article-list-item-heading">
                            Frequently asked questions
                        </h1>
                        </li>
                        </ul>
                    <section className="section-faq">
                    
                    {FAQData.customer.map((item) => {
                        return (
                            <div key={item.group} className="faq-container">
                                <h2 className="faq-group-heading">
                                    {item.group}
                                </h2>
                                <AccordionList data={item.faq} />
                            </div>
                        )
                    })}
                    {FAQData.driver.map((item) => {
                        return (
                            <div key={item.group} className="faq-container">
                                <h2 className="faq-group-heading">
                                    {item.group}
                                </h2>
                                <AccordionList data={item.faq} />
                            </div>
                        )
                    })}
                    {FAQData.merchant.map((item) => {
                        return (
                            <div key={item.group} className="faq-container">
                                <h2 className="faq-group-heading">
                                    {item.group}
                                </h2>
                                <AccordionList data={item.faq} />
                            </div>
                        )
                    })}
                </section>
                </section>

                {/* Contact section */}
                <section id="section-main-app-intro" >
                <div className="section-main-app-intro-container" id="contact">
                <h2 className="main-app-intro-heading">
                        Contact us
                    </h2>
                    </div>
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
                </section>
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
