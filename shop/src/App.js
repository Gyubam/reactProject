import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown, Jumbotron, Button} from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch} from 'react-router-dom';

function App() {

    let [shoes, shoes변경] = useState(Data);

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        <Switch>

            <Route exact path="/">
                <Jumbotron className='background'>
                    <h1>20% Season Off</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra
                        attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <div className='container'>
                    <div className='row'>
                        
                        {
                            shoes.map(function(a,i){
                                return(
                                    <Compo 글제목={shoes[i].title} 글내용={shoes[i].content} index={i}></Compo>
                                );
                            })

                        }

                    </div>
                </div>
            </Route>


            <Route path="/detail/:id">
                <Detail shoes={shoes}></Detail>
            </Route>

            <Route path={"/:id"}> 
                <div>1234</div>
            </Route>

        </Switch>    

                

            
        </div>
    );
}

function Compo(props){
    return(
        <div className='col-md-4'>
                  <img src={"https://codingapple1.github.io/shop/shoes"+ (props.index+1) +".jpg"} width="100%" />
                  <h4>{ props.글제목 }</h4>
                  <p>{ props.글내용}</p>
                </div>
    );
} 



export default App;
