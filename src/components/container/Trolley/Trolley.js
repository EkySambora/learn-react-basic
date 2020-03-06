import React from 'react';

const Trolley = () => {

    return (
        <div className="keranjang">
            <h2>Keranjang Belanja</h2>
            <ul>
                <li>Nama Barang : Daging Ayam Berbumbu Rasa original Plus Tepung Crispy</li>
                <li>Harga : Rp. 140.000,- [1 Karton - 10 Pack]</li>
                <li>Jumlah Pesan : 5 Karton</li>
            </ul>
            <hr/>
            <div className="total">
                Total : Rp.500.000
            </div>
        </div>
    )
}

export default Trolley;