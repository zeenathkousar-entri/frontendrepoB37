import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PNF from './PNF';
import { StoreContext } from './StoreContext';
import { useContext } from 'react';
import {NavLink,useNavigate} from 'react-router-dom'


const Navs = ({ setShowlogin }) => {
    const { url,setToken, token } =useContext(StoreContext);

        const logout=()=>{
            localStorage.removeItem("token");
            setToken("");
            //when the user logout, we have to send him to home page- use navigate hook.
            navigate('/');
        
          }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">User Registration</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
            <Nav.Link href="/login" onClick={()=>setShowlogin(true)}>Login</Nav.Link>

            {token?<NavLink to='/cart'>Cart</NavLink>:"Unable to fetch cart details"}

            <Nav.Link href="#" onClick={()=>logout()}>Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Navs
