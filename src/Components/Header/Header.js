import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContexts/UserContexts';
import ReactTooltip from 'react-tooltip';
import './Header.css';

const Header = () => {
    const navigate = useNavigate()
    const {user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(()=>{})
    }

    return (
        <div className='container'>
           <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Skill Traning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-link' to='/courses'>Course</NavLink>
                        <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                        
                    </Nav>
                    <Nav className="d-flex">
                        {
                            user?.uid 
                            ?
                            <NavLink className='nav-link' to='/login' onClick={handleLogOut}>Logout</NavLink>
                            :
                            <div  className="d-flex">
                                <NavLink className='nav-link' to='/login'>Login</NavLink>
                                <NavLink className='nav-link' to='/ragister'>Ragister</NavLink>
                            </div>
                            
                        }
                        <div>
                            {
                                user?.photoURL
                                ?
                                <NavLink className='nav-link' id='user'><img className='img' src={user.photoURL} alt="" /></NavLink>
                                :
                                <NavLink className='nav-link' id='user'><FaUser/></NavLink>
                            }
                            
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;