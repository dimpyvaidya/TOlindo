import React from 'react'
import './MainMenu.css'
import iconLogo from '../../assets/images/ic_logo.png'
import iconClose from '../../assets/images/ic_close.svg'
import { Link } from 'react-router-dom'

export class MainMenu extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <div className="main-nav-header">
                    <div className="main-nav-logo">
                        <Link
                            className="main-nav-logo-link"
                            to="/"
                            onClick={this.props.menuClickHandler}
                        >
                            <img
                                className="main-nav-logo-image"
                                src={iconLogo}
                                alt="TOlindo Logo"
                            />
                            <h1 className="main-nav-logo-title">TOlindo</h1>
                        </Link>
                    </div>
                    <button
                        className="main-nav-header-close-btn"
                        onClick={this.props.closeBtnHandler}
                    >
                        <img src={iconClose} alt="Close menu"></img>
                    </button>
                </div>
                <ul className="main-nav-menu-list">
                    <li className="main-nav-menu-list-item">
                        <Link to="/" onClick={this.props.menuClickHandler}>
                            Home
                        </Link>
                    </li>
                    <li className="main-nav-menu-list-item">
                        <Link to="/about" onClick={this.props.menuClickHandler}>
                            About us
                        </Link>
                        {/* <Link href="#FAQs" onClick={this.props.menuClickHandler}>
                            FAQs
                        </Link>
                        <Link href="#contact" onClick={this.props.menuClickHandler}>
                            Contact us
                        </Link> */}
                    </li>
                    <li className="main-nav-menu-list-item">
                        <Link to="/blog" onClick={this.props.menuClickHandler}>
                            Blog
                        </Link>
                    </li>
                    {/* <li className="main-nav-menu-list-item">
                        <Link to="/faq" onClick={this.props.menuClickHandler}>
                            FAQ
                        </Link>
                    </li>
                    <li className="main-nav-menu-list-item">
                        <Link to="/contact"
                            onClick={this.props.menuClickHandler}
                        >
                            Contacts
                        </Link>
                    </li> */}
                    <li className="main-nav-menu-list-item">
                        <Link to="/workwithus"
                            onClick={this.props.menuClickHandler}
                        >
                            Work with us
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
