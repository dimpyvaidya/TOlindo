import React from 'react'
import './TOlindoHeader.css'
import iconLogo from '../../assets/images/ic_logo.png'
import { MainMenu } from './MainMenu'
import { Link } from 'react-router-dom'

export class TOlindoHeader extends React.Component {
    openMenu() {
        document.querySelector('.main-nav').classList.add('open')
        document.body.style.overflow = 'hidden'
        document.body.style.height = '100%'
    }

    closeMenu() {
        document.querySelector('.main-nav').classList.remove('open')
        document.body.style.overflow = ''
        document.body.style.height = ''
    }

    handleClick(event) {
        document.body.style.overflow = ''
        document.body.style.height = ''
    }

    render() {
        return (
            <header className="page-header">
                <div className="page-header-logo">
                    <Link className="page-header-logo-link" to="/">
                        <img
                            className="page-header-logo-image"
                            src={iconLogo}
                            alt="TOlindo Logo"
                        />
                        <h1 className="page-header-logo-title">TOlindo</h1>
                    </Link>
                </div>
                <button
                    type="button"
                    className="page-header-menu-toggle"
                    onClick={this.openMenu}
                >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <MainMenu
                    className="page-menu"
                    closeBtnHandler={this.closeMenu}
                    menuClickHandler={this.handleClick}
                />
            </header>
        )
    }
}
