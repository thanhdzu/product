import React, { Component } from 'react';
import './App.css';
import ProductList from './components/productlist';
import AddProduct from './components/addproduct';
import ProductUpdate from './components/productupdate';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    
  }
  componentDidMount(){
    //this.getProductList();
    //console.log(this.state.product);
  }

  getObjectByID(arr,id) {
    let obj = arr.find((e) => e.id===id );
    return obj
  }
  render() {
    
    return (
      <div className="App">
        <ProductList  />
        <AddProduct />
        <ProductUpdate />
      </div>
    );
  }
}

export default App;
