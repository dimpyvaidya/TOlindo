import React from 'react'
import './MainCardList.css'

export class MainCardList extends React.Component {
    render() {
        return (
            <section className="section-cardlist">
                <h2 className="section-cardlist-heading">
                    {this.props.data.heading.firstLine}
                    <br />
                    <span>{this.props.data.heading.secondLine}</span>
                </h2>
                <ul className="section-cardlist-list">
                    {this.props.data.listData.map((item) => {
                        return (
                            <li
                                className="section-cardlist-list-item"
                                key={item.title}
                            >
                                <figure
                                    className="section-cardlist-list-item-image"
                                    style={{
                                        backgroundImage: `url('${item.image}')`,
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
