import React, { Component } from 'react'

export default class productlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
        this.getProductList = this.getProductList.bind(this);
        this.productList = this.productList.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.isAdd=== true){
            this.getProductList();
        }
    }


    getProductList() {
        fetch('http://localhost:3000/product').then(res => res.json())
            .then(res => {
                this.setState({
                    product: res
                })
                console.log(res);
            })
    }
    componentDidMount() {
        this.getProductList();
    }
    handleClick = Id => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch("http://localhost:3000/product/" + Id, requestOptions).then(res => {
            //console.log(res);
            if(res.ok){
                this.removeA(this.state.product, Id)
            }
            
        }).catch(err => console.log(err));
    }
  

    removeA(arr, id) {
        let filterlist = arr.filter(e => e.id !== id);
        //console.log(filterlist);
        return this.setState({ product: filterlist })
    }

    productList() {
        let list = this.state.product.map((item, index) => {
            return (
                <ul key={index}>
                    <li>{JSON.stringify(item)}</li>
                    <button onClick={() => { this.handleClick(item.id) }} >Delete</button>
                </ul>
            );
        })
        return list;
    }
    render() {
        return (
            <div>
                {this.productList()}
            </div>
        )
    }
}
