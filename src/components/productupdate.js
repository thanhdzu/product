import React, { Component } from 'react'

class productupdate extends Component {
    
    constructor(props) {
        super(props);      
        this.state = {
            product: {
                id: '',
                name: '',
                price: ''
            },
        }
    }  

    _isMounted = false;

    handleChange = (event) => {
        let data = this.state.product;
        data[event.target.name] = event.target.value;
        this.setState({
            product: data
        })
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps.match.params);
         this.getProductByID(nextProps.match.params.id)
    }
    componentDidMount(){
        this._isMounted = true
        this.getProductByID(this.props.match.params.id)
    }
    componentWillUnmount() {
        this._isMounted = false
      }
    getProductByID = (id) =>{
        fetch('http://localhost:3000/product/'+id).then(res => res.json()).then(data => {
            if(this._isMounted){
                this.setState({product: data})
            }
            
        })
    }
    update = (id) => {
        const requestOption = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.product)
        };

        fetch('http://localhost:3000/product/' + id, requestOption).then(res => {
            res.json();
            this.props.action(this.state.product)
        })
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.update(this.props.match.params.id);
    }


    updateForm = () => {
        return (
            <form onSubmit={this.formSubmit}>
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
export default productupdate;