import React,{Component} from "react";
import Navbar from './components/layouts/Navbars';

import "./App.css";

class App extends Component{
  render(){
   return (
   <div>
    <h1>Hello from react</h1>
      <Navbar/>
    </div>
    );

  }
}

export default App;
