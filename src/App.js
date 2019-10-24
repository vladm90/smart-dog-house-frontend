import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import Application from "./component/user/Application";
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

// import Toggle from 'react-bootstrap-toggle';
// import 'react-toggle/style.css';

function App() {
  return (

      <div className="container">

          <Router>

              <div className="col-md-12">
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                  <h1 className="text-center" style={style}>Smart Dog House</h1>
                  {/*<Toggle*/}
                      {/*onClick={this.onToggle}*/}
                      {/*on={<h2>ON</h2>}*/}
                      {/*off={<h2>OFF</h2>}*/}
                      {/*size="xs"*/}
                      {/*offstyle="danger"*/}
                      {/*active={this.state.toggleActive}*/}
                  {/*/>*/}
                  <button className="btn btn-primary" style={{margin:'10px'}} onClick={() => this.addUser()}> Start LED</button>
                  <button className="btn btn-warning" style={{margin:'10px'}} onClick={() => this.addUser()}> Temperature</button>
                  <button className="btn btn-info" style={{margin:'10px'}} onClick={() => this.addUser()}> Start Heat</button>

                  {<Switch>
                      <Route path="/" exact component={Application} >
                          <Route path="/" component={AddUserComponent} />
                          <Route path="/" component={ListUserComponent} />

                      </Route>
                      {/*<Route path="/users" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />*/}
                  </Switch>}
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: '#33ccff',
    margin: '10px'
}

export default App;
