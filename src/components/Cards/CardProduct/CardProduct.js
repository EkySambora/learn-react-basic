import React, { Component } from 'react';
import './CardProduct.css'

class CardProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            order: 0,
            stok: 20
        }
    }

    handleCounterChange = (val) => {
        this.props.onChangeOrder(val)
    }

    handlePlus = () => {
        if(this.state.order < this.state.stok){
            this.setState({
                order: this.state.order + 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() { 
        const {order,stok} = this.state;
        const {handleMinus, handlePlus} = this;
        return ( 
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?cs=srgb&dl=calories-chicken-chopping-board-cooked-616353.jpg&fm=jpg" alt="" />
                </div>
                <div className="product-title">Daging Ayam Berbumbu Rasa original Plus Tepung Crispy [1 Karton - 10 Pack]</div>
                <div className="product-price">Rp. 410.000 - Stok: {stok} Karton</div>
                <div className="counter">
                    <button className="minus" onClick={handleMinus}>-</button>
                    <input type="text" className="text-count" readOnly value={order} />
                    <button className="plus" onClick={handlePlus}>+</button>
                </div>
            </div>
        );
    }
}
 
export default CardProduct;