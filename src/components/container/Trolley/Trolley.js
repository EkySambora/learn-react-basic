import React from 'react';
import { connect } from 'react-redux';

const Trolley = (props) => {
    let totalPrice = props.totalOrder * props.price;
    return (
        <div className="keranjang">
            <h2>Keranjang Belanja</h2>
            <ul>
                <li>Nama Barang : Daging Ayam Berbumbu Rasa original Plus Tepung Crispy</li>
                <li>Harga : Rp. {props.price} - [1 Karton - 10 Pack]</li>
                <li>Jumlah Pesan : {props.totalOrder} Karton</li>
            </ul>
            <hr/>
            <div className="total">
                Total : Rp. {(totalPrice)}
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