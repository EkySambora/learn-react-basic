import React from 'react';
import './CardProduct.css'
import {connect} from 'react-redux';
import { PLUS_ORDER, MINUS_ORDER } from '../../../store/reducer/actionsType';
import { formatPrice } from '../../../helpers';

const CardProduct = (props) => {
    return ( 
        <div className="card">
            <div className="img-thumb-prod">
                <img src="https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?cs=srgb&dl=calories-chicken-chopping-board-cooked-616353.jpg&fm=jpg" alt="" />
            </div>
            <div className="product-title">Daging Ayam Berbumbu Rasa original Plus Tepung Crispy [1 Karton - 10 Pack]</div>
            <div className="product-price">Rp. { formatPrice(props.price) } - Stok: {props.stok} Karton</div>
            <div className="counter">
                <button className="minus" onClick={props.handleMinus}>-</button>
                <input type="text" className="text-count" readOnly value={props.order} />
                <button className="plus" onClick={props.handlePlus}>+</button>
            </div>
        </div>
    );
}
 
const mapStateToProps = (state) => {
    const { stok, price } = state
    return {
        order: state.totalOrder,
        stok,
        price
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: PLUS_ORDER}),
        handleMinus: () => dispatch({type: MINUS_ORDER}),
    }
}
export default connect(mapStateToProps, dispatchToProps)(CardProduct);