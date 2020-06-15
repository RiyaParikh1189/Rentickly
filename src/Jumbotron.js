import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import './Jumbotron.css';

export const Jumbotron = () => (
 <div>
    <div>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
      </Container>
    </Jumbo>
    </div>
</div>
)
