import React, { Component } from 'react'

export default class addproduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                id: '',
                name: '',
                price: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.productForm = this.productForm.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    handleChange(event) {
        let data = this.state.product;
        data[event.target.name] = event.target.value;
        //console.log(data);
        this.setState({ product: data })
        //console.log(JSON.stringify(this.state.product));
    }

    addProduct() {
        const requestOption = {
            method: 'post',
            body: JSON.stringify(this.state.product),
            headers: { 'Content-Type': 'application/json' }
        };

        return fetch('http://localhost:3000/product/', requestOption).then(res => {
            res.json();
            this.props.action('added');
        });
    }

    formSubmit(event) {
        event.preventDefault();
        this.addProduct();
    }
    productForm() {
        return (
            <form onSubmit={this.formSubmit}>
                <input
                    type="text"
                    name="name"
                    value={this.state.product.name}
                    onChange={this.handleChange} />
                <input
                    type="text"
                    name="price"
                    value={this.state.product.price}
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        )
    }
    render() {
        return (
            <div>
                {this.productForm()}
            </div>
        )
    }
}
