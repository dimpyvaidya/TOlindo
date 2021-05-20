import React from 'react'
import './PageHeader.css'
import { TOlindoHeader } from '../TOlindoHeader'

export class PageHeader extends React.Component {
    render() {
        return (
            <>
                <div className="page-header-container">
                    <TOlindoHeader />
                    <div className="page-header-text-container">
                        <h1 className="page-header-heading">
                            {this.props.data.title}
                        </h1>
                        <p className="page-header-menu-nav">
                            <span className="page-header-menu-nav-group">
                                {this.props.data.menuNavs.group.title}
                            </span>
                            |
                            <span className="page-header-menu-nav-current">
                                {this.props.data.menuNavs.current.title}
                            </span>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
