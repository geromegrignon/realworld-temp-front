import React, { useState } from 'react'
import { NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="App-header">
            <nav className="navbar navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" activeClassName="active" to="/">conduit</NavLink>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item">
                            <NavLink className="nav-link active" activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/editor">
                                <i className="ion-compose"></i>&nbsp;New Article
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/settings">
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/signin">Sign in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/register">Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
