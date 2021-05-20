import React from 'react'
import './AccordionList.css'

export class AccordionList extends React.Component {
    constructor(props) {
        super(props)
        this.data = props.data
    }

    handleAccordionClick(e) {
        e.currentTarget.classList.toggle('active')
        var panel = e.currentTarget.nextElementSibling
        panel.classList.toggle('expanded')
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    }

    render() {
        return (
            <div className={`accordion-list-container ${this.props.className}`}>
                {this.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <button
                                className="accordion"
                                onClick={this.handleAccordionClick}
                            >
                                {item[Object.keys(item)[0]]}
                            </button>
                            <div className="panel">
                                <p>{item[Object.keys(item)[1]]}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
