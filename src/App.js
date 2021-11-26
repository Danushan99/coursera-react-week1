import './App.css';
import { Component } from 'react';
import{Navbar, NavbarBrand}from 'reactstrap';
import Menu from './components/MenuComponens';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar dark color ="primary">
        <div className="container">
          <NavbarBrand href="/">
           First Application
          </NavbarBrand>
          </div>
      </Navbar>
      <Menu/>
    </div>
  );
}
}
export default App;
