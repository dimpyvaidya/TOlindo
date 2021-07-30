import React from 'react'
import './MainMenu.css'
import iconLogo from '../../assets/images/ic_logo.png'
import iconClose from '../../assets/images/ic_close.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll'

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
                        <Link to="/blog" onClick={this.props.menuClickHandler}>
                            Blog
                        </Link>
                    </li>
                    
                    <li className="main-nav-menu-list-item">
                        <Link to="/workwithus"
                            onClick={this.props.menuClickHandler}
                        >
                            Work with us
                        </Link>
                    </li>

                    <li className="main-nav-menu-list-item">
                        <div className="subnav">
                        <Link to="/about" onClick={this.props.menuClickHandler}>
                            About  us   <i class="fa fa-caret-down"></i></Link>
                            <div className="subnav-content">
                                <a href="/about#about">Who we are</a>
                                <a href="#ceo">TOlindo CEO</a>
                                <a href="/about#faq">TOlindo FAQs</a>
                                <a href="/about#contact">Contact us</a>
                            </div>
                        </div> 
                    </li>
                </ul>
            </nav>
        )
    }
}
