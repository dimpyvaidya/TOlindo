import React from 'react'
import './MainFleet.css'
import { MainKindList } from './MainKindList'
import { colors as TOlindoColors } from './common/TOlindoColors'

export class MainFleet extends React.Component {
    render() {
        return (
            <section id="section-main-fleet">
                <h2 className="main-fleet-heading">
                    {this.props.data.heading}
                    <br />
                    <span></span>
                </h2>
                <p className="main-fleet-text">{this.props.data.text}</p>
                <MainKindList
                    data={this.props.data.listData}
                    colors={{
                        background: 'transparent',
                        title: TOlindoColors.textDefault,
                        text: TOlindoColors.textDefault,
                    }}
                />
                {/* <ul className="main-fleet-list">
                    {this.data.map((item) => {
                        return (
                            <li className="main-fleet-list-item">
                                <figure className="main-fleet-list-item-image"></figure>
                                <div className="main-fleet-list-item-content">
                                    <h3 className="main-fleet-list-item-title">
                                        {item.title}
                                    </h3>
                                    <p className="main-fleet-list-item-text">
                                        {item.text}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul> */}
            </section>
        )
    }
}
