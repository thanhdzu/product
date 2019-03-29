import React, { Component } from 'react'

export default class productupdate extends Component {
    constructor() {
        super();
        this.state = {
            product: {
                id: '34',
                name: 'thanh',
                price: 11
            }
        }
    }

    handleChange = (event) => {
        let data = this.state.product;
        data[event.target.name] = event.target.value;
        this.setState({
            product: data
        })
    }

    update = (id) => {
        const requestOption = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.product)
        };

        fetch('http://localhost:3000/product/'+id, requestOption).then(res => res.json()).then(data =>  console.log(data))
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.update(34);
    }


    updateForm = () => {
        return (
            <form onSubmit = {this.formSubmit}>
                <input
                    type="hidden"
                    name="id"
                    readOnly
                    value={this.state.product.id}
                    />
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
                <input type="submit" value="Update" />
                <input type="button" value="Cancel" />
            </form>
        )
    }
    render() {
        return (
            <div>
                {this.updateForm()}
            </div>
        )
    }
}
