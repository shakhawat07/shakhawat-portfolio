import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Navigation.css'

const Navigation = () => {

    // NavLink activeStyle 
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "orange",
    //     background: "black"
    // };
    return (
        <Navbar bg="black" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-2">
                    {/* <img className="img-fluid me-3" src="https://image.freepik.com/free-vector/motorcycle-wheel-logo_23-2147491893.jpg" alt="" width="45" height="25" /> */}
                    {/* <span className="fs-5">Shakhawat</span> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-end justify-content-end m-auto">
                        <NavLink className="nav"
                            // activeStyle={activeStyle}
                            to="/home">Home
                        </NavLink>
                        <NavLink className="nav"
                            // activeStyle={activeStyle}
                            to="/projects">Projects
                        </NavLink>
                        <NavLink className="nav"
                            // activeStyle={activeStyle}
                            to="/blogs">Blogs
                        </NavLink>
                        <NavLink className="nav"
                            // activeStyle={activeStyle}
                            to="/about">About
                        </NavLink>
                        <NavLink className="nav"
                            // activeStyle={activeStyle}
                            to="/contact">Contact
                        </NavLink>
                        {/* <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/login">Login
                        </NavLink> */}

                        {/* dropdown  */}
                        {/* {user?.email &&
                            <Dropdown className="dropdown-container" id="">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Admin
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {user?.email && <NavLink id="RouterNavLink" className="dropdown-nav"
                                        activeStyle={activeStyle}
                                        to="/manageAllOrders">
                                        <Dropdown.Item href="#/action-1">Manage All Orders</Dropdown.Item>
                                    </NavLink>
                                    }

                                    {user?.email && <NavLink id="RouterNavLink" className="dropdown-nav"
                                        activeStyle={activeStyle}
                                        to="/addTourPackage">
                                        <Dropdown.Item href="#/action-1">Add Tour Package</Dropdown.Item>
                                    </NavLink>
                                    }

                                </Dropdown.Menu>

                            </Dropdown>
                        } */}


                        {/* log out button show */}
                        {/* <button className="ms-3 text-white btn btn-black border border-white">Hire Me</button> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;