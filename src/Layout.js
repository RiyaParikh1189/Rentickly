import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';
export const Layout = (props) => (
  <Container>
   <div className="wrapper">
     <div className="form-wrapper"> 
    {props.children}
    </div>
    </div>
  </Container>
)
