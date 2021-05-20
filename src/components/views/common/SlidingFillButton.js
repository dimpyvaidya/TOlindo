import React from 'react'
import { Link } from 'react-router-dom'
import './SlidingFillButton.css'

export class SlidingFillButton extends React.Component {
    render() {
        return (
            <Link id={this.props.id} className="sf-btn" to={this.props.url}>
                <span className="sf-btn-fill"></span>
                <span className="sf-btn-title">Read More</span>
            </Link>
        )
    }
}
