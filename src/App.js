import './App.css';
import { Component } from 'react';
import{Navbar, NavbarBrand}from 'reactstrap';
import Menu from './components/MenuComponens';
import { DISHES} from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      dishes : DISHES
    };
  }
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
