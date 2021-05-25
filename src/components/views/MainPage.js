import React from 'react'
import './MainPage.css'
import { colors as TOlindoColors } from './common/TOlindoColors'
import { MainAppIntroduction } from './MainAppIntroduction'
import { MainArea } from './MainArea'
import { MainCardList } from './MainCardList'
import { MainFleet } from './MainFleet'
import { MainFooter } from './MainFooter'
import { MainHero } from './MainHero'
import { MainKindList } from './MainKindList'
import { MainRecruit } from './MainRecruit'
import { MainSectionFourFeatures } from './MainSectionFourFeatures'
import { MainSlideImages } from './MainSlideImages'
import { MainSubscribeNewsLetter } from './MainSubscribeNewsLetter'
import { MainVideos } from './MainVideos'
import { TOlindoHeader } from './TOlindoHeader'

import iconCourier from '../../assets/images/ic_courier.svg'
import iconFood from '../../assets/images/ic_food.svg'
import iconGrocery from '../../assets/images/ic_grocery.svg'
import iconPharmacy from '../../assets/images/ic_pharmacy.svg'
import iconBazaar from '../../assets/images/ic_bazaar.svg'

import iconTruck from '../../assets/images/ic_truck.svg'
import iconVan from '../../assets/images/ic_van.svg'
import iconCar from '../../assets/images/ic_car.svg'
import iconEBikes from '../../assets/images/ic_ebikes.svg'
import iconBicycles from '../../assets/images/ic_bicycles.svg'

import imgCard1 from '../../assets/images/img_card_1.jpeg'
import imgCard2 from '../../assets/images/img_card_2.jpeg'
import imgCard3 from '../../assets/images/img_card_3.jpeg'
import imgCard4 from '../../assets/images/img_card_4.jpeg'
import { Redirect } from 'react-router'

export class MainPage extends React.Component {
    constructor(props) {
        super(props)
        // For linking to QR code
        this.state = {
            businessQR: this.props.location.search.includes('short=1'),
        }

        this.goodsListData = [
            {
                title: 'Courier',
                text: 'Need help to send or receive packages safely and quickly?',
                image: iconCourier,
            },
            {
                title: 'Food',
                text: 'Skip the dishes and order food from your favorite restaurant',
                image: iconFood,
            },
            {
                title: 'Grocery',
                text: 'From fresh produce to essential products, get what you need',
                image: iconGrocery,
            },
            {
                title: 'Pharmacy',
                text: 'For your essencial over the counter or prescription drugs.',
                image: iconPharmacy,
            },
            {
                title: 'Bazaar',
                text: 'Purchase gifts, flowers, mobiles or anything while sitting home.',
                image: iconBazaar,
            },
        ]

        this.fleetListData = {
            heading: 'Our Fleet',
            text: 'TOlindo has a company-branded fleet of e-bike employees, and owner operator vehicles all the way up to cargo vans for your same day cost-effective delivery needs.',
            listData: [
                {
                    title: 'Truck',
                    text: 'Pick up time within 3 hours.',
                    image: iconTruck,
                },
                {
                    title: 'Van',
                    text: 'For medium to large size packages. Pick up within 3 hours.',
                    image: iconVan,
                },
                {
                    title: 'Car',
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

        this.businessListData = {
            heading: {
                firstLine: 'Made Easy',
                secondLine: 'For Your Business',
            },
            listData: [
                {
                    title: 'Customize your store',
                    text: 'Setup your store the way you like and attract customers',
                    image: imgCard1,
                    // image: `${process.env.PUBLIC_URL}/images/img_card_1.jpeg`,
                },
                {
                    title: 'Easy customization',
                    text: 'self-managed platform for all your business needs',
                    image: imgCard2,
                    // image: `${process.env.PUBLIC_URL}/images/img_card_2.jpeg`,
                },
                {
                    title: 'Hasseless App for your customers',
                    text: 'TOlindo made it easy for businesses and users.',
                    image: imgCard3,
                    // image: `${process.env.PUBLIC_URL}/images/img_card_3.jpeg`,
                },
                {
                    title: 'Get ready for the orders!',
                    text: 'Live tracking system for your customer’s orders.',
                    image: imgCard4,
                    // image: `${process.env.PUBLIC_URL}/images/img_card_4.jpeg`,
                },
            ],
        }
    }

    render() {
        return this.state.businessQR ? null : (
            <div id="main-page">
                <TOlindoHeader />
                <MainHero />
                <MainKindList
                    data={this.goodsListData}
                    colors={{
                        background: TOlindoColors.secondary,
                        title: TOlindoColors.textSecondary,
                        text: TOlindoColors.textPrimary,
                    }}
                />
                <MainFleet data={this.fleetListData} />

                <MainAppIntroduction />
                <MainSectionFourFeatures />

                <MainCardList data={this.businessListData} />
                <MainSubscribeNewsLetter />
                <MainArea />
                <MainSlideImages />
                <MainVideos />
                <MainRecruit />
                <MainFooter />
            </div>
        )
    }

    componentDidMount() {
        if (this.state.businessQR) {
            window.location.replace(
                'https://drive.google.com/file/d/1jDmJAh4q_X8s8c1eWy11GDk-Q2gmeDUq/view?usp=sharing'
            )
        }
    }
}
