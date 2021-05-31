import React from 'react'
import { PageHeader } from '../containers/PageHeader'
import { MainFooter } from '../MainFooter'
import './FAQPage.css'
import FAQData from './FAQData.json'
import { AccordionList } from '../common/AccordionList'

export class FAQPage extends React.Component {
    constructor() {
        super()
        this.headerData = {
            title: 'FAQ',
            menuNavs: {
                group: {
                    title: 'Home',
                    url: '',
                },
                current: {
                    title: 'FAQ',
                    url: 'faq',
                },
            },
        }
    }

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <PageHeader data={this.headerData} />
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
                <MainFooter />
            </div>
        )
    }
}
