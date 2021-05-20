import React from 'react'
import './MainCardList.css'
import imgCard1 from '../../assets/images/img_card_1.jpeg'
import imgCard2 from '../../assets/images/img_card_2.jpeg'
import imgCard3 from '../../assets/images/img_card_3.jpeg'
import imgCard4 from '../../assets/images/img_card_4.jpeg'

export class MainCardList extends React.Component {
    constructor() {
        super()
        this.data = {
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
        return (
            <section className="section-cardlist">
                <h2 className="section-cardlist-heading">
                    {this.data.heading.firstLine}
                    <br />
                    <span>{this.data.heading.secondLine}</span>
                </h2>
                <ul className="section-cardlist-list">
                    {this.data.listData.map((item) => {
                        return (
                            <li
                                className="section-cardlist-list-item"
                                key={item.title}
                            >
                                <figure
                                    className="section-cardlist-list-item-image"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></figure>
                                <div className="section-cardlist-list-item-content">
                                    <h4 className="section-cardlist-list-item-content-title">
                                        {item.title}
                                    </h4>
                                    <p className="section-cardlist-list-item-content-text">
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}
