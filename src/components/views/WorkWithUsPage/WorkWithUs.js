import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import { MainArea } from '../MainArea'
import { MainFleet } from '../MainFleet'
import './WorkWithUs.css'
import { Link } from 'react-router-dom'


import workwithus2 from '../../../assets/images/work_with_us_2.png'

import iconAppStore from '../../../assets/images/ic_appstore.png'
import iconGoogleStore from '../../../assets/images/ic_googlestore.png'

import needmoreinfo1 from '../../../assets/images/need_more_info1.png'
import needmoreinfo2 from '../../../assets/images/need_more_info2.png'

import weoffer from '../../../assets/images/we_offer.png'

import howtostart1 from '../../../assets/images/how_to_start1.png'
import howtostart2 from '../../../assets/images/how_to_start2.png'
import howtostart3 from '../../../assets/images/how_to_start3.png'

import iconTruck from '../../../assets/images/ic_truck.svg'
import iconVan from '../../../assets/images/ic_van.svg'
import iconCar from '../../../assets/images/ic_car.svg'
import iconEBikes from '../../../assets/images/ic_ebikes.svg'
import iconBicycles from '../../../assets/images/ic_bicycles.svg'

export class WorkWithUs extends React.Component {
    constructor() {
        super()
        this.headerData = {
            title: 'Work with us',
            menuNavs: {
                group: {
                    title: 'Home',
                    url: '',               
                },
                current: {
                    title: 'Work with us',
                    url: 'workwithus',
                },
            },
        }
        this.fleetListData = {
            heading: 'Our Fleet',
            text: 'TOlindo has a company-branded fleet of e-bike employees, and owner operator vehicles all the way up to cargo vans for your same day cost-effective delivery needs.',
            listData: [
                {
                    title: 'Trucks',
                    text: 'Pick up time within 3 hours.',
                    image: iconTruck,
                },
                {
                    title: 'Vans',
                    text: 'For medium to large size packages. Pick up within 3 hours.',
                    image: iconVan,
                },
                {
                    title: 'Cars',
                    text: 'For your sensitive products, pickup within 1hour.',
                    image: iconCar,
                },
                {
                    title: 'E-bikes',
                    text: 'Our Nutshell instant delivery service. Deliveries in 30 minutes',
                    image: iconEBikes,
                },
                {
                    title: 'Bicycles',
                    text: 'Our Nutshell instant delivery service. Deliveries in 30 minutes',
                    image: iconBicycles,
                },
            ],
        }
        this.state = {
            name: '',
            email: '',
            tel: '',
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
        // alert(JSON.stringify(this.state))
        alert("Thank you! We will get back to you soon.")
    }

    

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
                {/* What we do section */}
                <section id="wwu">
                    <div id="wwu-content">
                        <h1 id="wwu-heading">
                            What we do...
                        </h1>
                        <p id="wwu-text">
                            We are an on-demand e-commerce marketplace hwere local businesses can list their products.
                        </p>
                        <p id="wwu-text">
                            Our commitment is to provide your customers with an easy-to-use application, where they can can find all their favourite essential goods.
                        </p>
                        <p id="wwu-text">
                            We recognise that there is a gap between food-delivery and on-demand services. Whether your business needs a marketplace to showcase your products or a reliable courier service, TOlindo is the Solution!
                        </p>
                    </div>
                    <figure id="wwu-image-container">
                        <img src={workwithus2} alt="workwithus2" id="image"/>
                    </figure>
            </section>

            {/* We Offer section */}
            <h1 id="wwu-heading" style={{textAlign:'center', paddingTop:'1em'}}>
                We Offer
            </h1>
            <section id="wwu" style={{backgroundColor:'#ffffff'}}>
                <div id="wwu-content">
                    <h2>User Friendly App</h2>
                    <p id="wwu-text">
                        TOlindo provides a user-friendly interface application for navigation and purchase, just one click away! 
                    </p> <br/><br/><br/><br/>
                    <h2>Full E-Commerce</h2>
                    <p id="wwu-text">
                        TOlindo supplies a full E-Commerce platform, live tracking system, company equipment and delivery drivers.
                    </p>
                </div>   
                <div>
                    
                    <figure id="wwu-image-container">
                        <img src={weoffer} alt="weoffer"  id="image"/>
                    </figure>
                </div>
                <div  id="wwu-content">
                    <h2>Deliver Everything</h2>
                    <p id="wwu-text">
                        We deliver any size, from a small package to big furniture, with no size limitations!
                    </p> <br/><br/><br/><br/>
                    <h2>Full Control</h2>
                    <p id="wwu-text">
                        With TOlindo you will have full control of your online store, you will manage all your products, price offers, etc. 
                    </p>
                </div>  
            </section>

            {/* How to start section */}
            <h1 id="wwu-heading-yellow" >
                How to start?
            </h1>
            <section id="wwu">
                <div  id="wwu-image-container">
                    <figure>
                        <img src={howtostart1} alt="howtostart1" id="how-to-img" />
                    </figure>
                    <div id="wwu-content">
                        <h2>Register with us</h2>
                        <p id="wwu-text">
                        Create an account on our <a href="https://tolindo.net/merchant/auth/register"><i>digital platform</i></a> and provide the necessary information.
                        </p>
                    </div>
                </div>

                <div  id="wwu-image-container">
                    <figure>
                        <img src={howtostart2} alt="howtostart2" id="how-to-img"/>
                    </figure>
                    <div id="wwu-content">
                        <h2>Fully guided process</h2>
                        <p id="wwu-text">
                            A representative will guide you on building your store, & share tips for customization.
                        </p>
                    </div>
                </div>

                <div  id="wwu-image-container">
                    <figure>
                        <img src={howtostart3} alt="howtostart3" id="how-to-img"/>
                    </figure>
                    <div id="wwu-content">
                        <h2>Working together</h2>
                        <p id="wwu-text">
                            We will be there every step of the way until your store is ready to start selling.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicles we work with section */}
            <MainFleet data={this.fleetListData} />
            <div>
                <hr className="dotted"></hr>
            </div>
            
            {/* Working Area section */}    
            <MainArea />
                
            {/* Need More info section */}
            <h1 id="wwu-heading-yellow" >
                Need more info?
            </h1>
            <section id="wwu">
                <figure id="wwu-image-container">
                    <img src={needmoreinfo1} alt="needmoreinfo1" id="image"/>
                </figure>
                <div  id="wwu-text2">
                    <p>Email us at </p>
                    <p><b>info@tolindo.ca</b></p>
                    <p>and our team</p>
                    <p> will contact you shortly</p>
                    <p id="wwu-text2">
                        <b>Find us on :</b><br></br><br></br>
                        <div>
                        <Link
                            to={{
                                pathname:
                                    'https://apps.apple.com/in/app/tolindo/id1519808601',
                            }}
                            target="_blank"
                        >
                            <img src={iconAppStore} alt="Appstore link"   id="appstore-img"/>
                        </Link>
                        <Link
                            to={{
                                pathname:
                                    'https://play.google.com/store/apps/details?id=app.tolindo.customer',
                            }}
                            target="_blank"
                        >
                            <img src={iconGoogleStore} alt="Google store link" />
                        </Link>
                        </div>
                        </p>
                    </div>
                    <figure id="wwu-image-container">
                        <img src={needmoreinfo2} alt="needmoreinfo2" id="image"/>
                    </figure>
            </section>

            {/* Registration section */}
            <form className="contacts-form" onSubmit={this.handleSubmit}>
                    <h2 className="contacts-form-heading">Contact us</h2>
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
                        <input
                            type="tel"
                            placeholder="Your phone number"
                            name="tel"
                            pattern="[0-9]*"
                            minLength="10"
                            value={this.state.tel}
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

        {/* Footer section */}
            <MainFooter />
        </div>
        )
    }
}
