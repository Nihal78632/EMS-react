import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar style={{height:'60px'}} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <i class=" fa-solid fa-layer-group"></i>{' '}
            EMS Application
          </Navbar.Brand>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header