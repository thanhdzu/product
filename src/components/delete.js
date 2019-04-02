import React, { Component } from 'react'

export default class Delete extends Component {
    handleClick = Id => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch("http://localhost:3000/product/" + Id, requestOptions).then(res => {
            if (res.ok) {
               console.log(this.props);
               this.props.action(true)
               this.props.history.push('/');
            }

        }).catch(err => console.log(err));
    }
  render() {
    return (
         <button onClick={() => { this.handleClick(this.props.productid) }} >Delete</button>
    )
  }
}
