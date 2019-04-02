import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ProductList from './components/productlist';
import AddProduct from './components/addproduct';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
    }

  }

  addFromChild = (datafromchid) => {
    console.log('added', datafromchid);
    this.setState({
      isAdd: true
    })
  }
  
 
  render() {

    return (
      <Router>
        <div className="App">
          <ProductList isAdd={this.state.isAdd}  isUpdate = {this.state.isUpdate}/>
          <AddProduct action={this.addFromChild} />
          {/* <ProductUpdate action = {this.updateFromChild} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
