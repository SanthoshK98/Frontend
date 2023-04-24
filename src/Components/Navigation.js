import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const Navigation =()=> {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
           
            <Nav.Link href="#action2"><Link to='/cart'>Cart</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to ='/register'>Register</Link></Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><Link to='/products'>Men's Wear</Link></NavDropdown.Item>
           
         
            
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default Navigation;