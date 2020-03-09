import React from 'react'
import { formatPrice } from '../../../helpers';

const CardTrolley = (props) => (
    <div className="card-trolley">
        <h2>Keranjang Belanja</h2>
        <ul>
            <li>Nama Barang : Daging Ayam Berbumbu Rasa original Plus Tepung Crispy</li>
            <li>Harga : <b>Rp. {props.price} </b> - [1 Karton = 10 Pack]</li>
            <li>Jumlah Pesan : <b>{props.totalOrder}</b> Karton</li>
        </ul>
        <hr/>
        <div className="total">
            Total : Rp. { formatPrice(props.totalOrder * props.price) }
        </div>
    </div>
);

export default CardTrolley;