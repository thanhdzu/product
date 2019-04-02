import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import ProductUpdate from "./productupdate";
import Delete from './delete';
export default class productlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            isUpdate: false,
        }
        this.getProductList = this.getProductList.bind(this);
        this.productList = this.productList.bind(this);
    }s

    componentWillReceiveProps(nextProps) {
         if (nextProps.isAdd === true) {
             this.getProductList();
        }
    }

    componentDidMount = () => {
        this.getProductList();
    }
  
    getProductList() {
        fetch('http://localhost:3000/product').then(res => res.json()).then(data => this.setState({product: data}))
    }
    
    updateFromChild = (datafromchid) => {
        this.setState({
          isUpdate: true
        })
        if(this.state.isUpdate){
            this.getProductList();
        }
      }

    productList() {
        let list = this.state.product.map((item, index) => {
            return (
                
                <ul key={index}>
                    <li>{JSON.stringify(item)}</li>
                    <Route path="/"   render={ (props) => <Delete action = {this.updateFromChild} {...props} productid ={item.id}/>} />
                    <Link to={`/productupdate/${item.id}`} >Update</Link>
                </ul>
            );
        })
        return list;
    }

    render() {
        return (
            <div>
                {this.productList()}
                {/* <Route path="/productupdate/:id" match={this.props.match} component={ProductUpdate} action = {this.updateFromChild} /> */}
                <Route path="/productupdate/:id"  render={ (props) => <ProductUpdate {...props} action = {this.updateFromChild}/>} /> 
            </div>
        )
    }
}
