import React, { Component } from 'react';
import './Product.css'
class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src="https://img.icons8.com/clouds/100/000000/duolingo-logo.png" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://img.icons8.com/doodle/48/000000/shopping-cart.png" alt="" />
                        <span>3</span>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?cs=srgb&dl=calories-chicken-chopping-board-cooked-616353.jpg&fm=jpg" alt="" />
                    </div>
                    <div className="product-title">Daging Ayam Berbumbu Rasa original Plus Tepung Crispy [a Karton - 10 Pack]</div>
                    <div className="product-price">Rp. 410.000</div>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" className="text-count" value={3} />
                        <button className="plus">+</button>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Product;