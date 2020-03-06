import React, { Component } from 'react';
import './Product.css'
import CardProduct from '../../Cards/CardProduct/CardProduct';
class Product extends Component {
    
    handleChangeOrder = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() { 
        const {handleChangeOrder} = this;
        return <CardProduct onChangeOrder={(val)=> handleChangeOrder(val)} />;
    }
}
 
export default Product;