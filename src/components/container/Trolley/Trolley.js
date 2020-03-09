import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../../helpers';

const Trolley = (props) => {
    let totalPrice = props.totalOrder * props.price;
    return (
        <div className="keranjang">
            <h2>Keranjang Belanja</h2>
            <ul>
                <li>Nama Barang : Daging Ayam Berbumbu Rasa original Plus Tepung Crispy</li>
                <li>Harga : <b>Rp. {props.price} </b> - [1 Karton = 10 Pack]</li>
                <li>Jumlah Pesan : <b>{props.totalOrder}</b> Karton</li>
            </ul>
            <hr/>
            <div className="total">
                Total : Rp. { formatPrice(totalPrice) }
            </div>
        </div>
    )
}

const mapsToProps = state => {
    return {
        price: state.price,
        totalOrder: state.totalOrder
    }
}

export default connect(mapsToProps)(Trolley);