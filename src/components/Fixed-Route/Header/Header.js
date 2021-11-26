import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

import './Header.css';



const Header = () => {

    const { user, logout } = useAuth();
    const activeStyle = {
        fontWeight: "bold",


    }

    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="#home">

                    <div>
                        <h2>Life Shades </h2>
                        <p></p>


                        <img alt=""
                            src="https://cdn1.iconfinder.com/data/icons/medical-services-4/64/x-18-512.png"
                            width="65"
                            height="70"


                            className="d-inline-block align-top"
                        />
                    </div>

                </Navbar.Brand>

                <nav className="header-part" >
                    <div className="links">
                        <NavLink className="link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="link" activeStyle={activeStyle} to="/appointment">Appointment</NavLink>
                        <NavLink className="link" activeStyle={activeStyle} to="/departments">Departments</NavLink>
                        <NavLink className="link" activeStyle={activeStyle} to="/login">Login</NavLink>
                    </div>

                    
                    <br />
                    <div>
                        {user.email && <span
                            style={{ color: 'darkRed', fontWeight: 'bold' }}>Hello !
                            {user.displayName}
                        </span>}

                        <br />
                        {user?.email &&
                            <button onClick={logout} className="logout-btn">
                                Log Out
                            </button>}
                    </div>
                </nav>
            </Container>
        </Navbar>
    )
};

export default Header;