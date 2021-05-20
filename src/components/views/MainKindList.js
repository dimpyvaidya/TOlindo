import React from 'react'
import './MainKindList.css'

export class MainKindList extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.data
        this.colors = props.colors
    }
    render() {
        return (
            <section
                className="section-kind-list"
                style={{ backgroundColor: this.colors.background }}
            >
                <ul className="kind-list">
                    {this.data.map((item) => {
                        return (
                            <li className="kind-list-item" key={item.title}>
                                <figure className="kind-list-item-image">
                                    <img src={item.image} alt={item.title} />
                                </figure>
                                <div className="kind-list-item-content">
                                    <h3
                                        className="kind-list-item-title"
                                        style={{ color: this.colors.title }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="kind-list-item-text"
                                        style={{ color: this.colors.text }}
                                    >
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
