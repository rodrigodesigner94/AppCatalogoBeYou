import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavTop(){
  return(
    <Navbar style={{backgroundColor: '#f5cdf8', zIndex:'1', position: 'fixed', width: "100vw"}} >
    <Container style={{marginLeft: "1.5rem", display: 'flex', justifyContent:'space-between'}}  >
    <Navbar.Brand href="#home">
      <Link to="/">
        <img
          src="/logo.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="logo beyou"
          />
      </Link>
      </Navbar.Brand>
      
      
        <Form  >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          
        </Form>        
      {/* <Link to="/cadastrodecliente" className="text-black" >                        
            Cadastre-se          
          </Link> */}
    </Container>
  </Navbar>
  )
}
export default NavTop;