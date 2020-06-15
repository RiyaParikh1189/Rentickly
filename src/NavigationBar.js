import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import './NavigationBar.css';
const Styles = styled.div`

  .navbar {
    background-color: #222;
    @media screen and (min-width: 415px){
      .site-container {
        display:flex;
        flex-direction: row;
      }
    }
  }

.navbar-nav .nav-link {
    color: black;
    float: right;
    padding-top: 2px;
    padding-left:25px;
    padding-bottom: 5px;
    flex-direction:row;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <div class name="wrapper">
      <div class name="form-wrapper">
    <Navbar expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/AdPosting">AdPosting?</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">ContactUS</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/faq">FAQ</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/register">Registration</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </div>
  </Styles >
)
