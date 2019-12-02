import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TemperatureComponent from "./component/user/TemperatureComponent";
import ControlComponent from "./component/user/ControlComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import Application from "./component/user/Application";
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


function App() {
  return (

      <div>

          <Router>

              <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                      <Navbar.Brand href="#home">Smart Dog House</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="mr-auto">
                              <Nav.Link href="#features">Features</Nav.Link>
                              <Nav.Link href="#pricing">Pricing</Nav.Link>
                              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
                          <Nav>
                              <Nav.Link href="#deets">More deets</Nav.Link>
                              <Nav.Link eventKey={2} href="#memes">
                                  Dank memes
                              </Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Navbar>


                  <Switch>
                      <Route path="/" exact component={Application} >
                          <Route path="/" component={ControlComponent} />
                          <Route path="/" component={EditUserComponent} />
                          <Route path="/" component={TemperatureComponent} />

                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
}


export default App;
