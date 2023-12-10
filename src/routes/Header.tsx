import React from 'react';
import './Header.css'

const TopBar: React.FC = () => {
    return (
        <header>
            <div className="topbar">
                <div className="logo_group">
                    <img src="mini_logo.svg" alt="Mini Logo" />
                    <img src="logo.svg" alt="Logo" />
                </div>
                <menu>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </menu>
                <textarea rows={1} className="searchbox" placeholder="Search" />
            </div>
        </header>
    )
}

export default TopBar;