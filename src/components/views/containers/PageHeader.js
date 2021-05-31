import React from 'react'
import './PageHeader.css'
import { TOlindoHeader } from '../TOlindoHeader'
import { Link } from 'react-router-dom'

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
                                <Link
                                    className="page-header-menu-nav-group-link"
                                    to={`/${this.props.data.menuNavs.group.url}`}
                                >
                                    {this.props.data.menuNavs.group.title}
                                </Link>
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
