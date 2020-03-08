import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.css'

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
            <img src="https://img.icons8.com/clouds/100/000000/duolingo-logo.png" alt="" />
        </div>
      </Link>
      <Link to="/keranjang">
        <div className="trolley">
            <img src="https://img.icons8.com/doodle/48/000000/shopping-cart.png" alt="" />
            <span>{props.order}</span>
        </div>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

export default connect(mapStateToProps)(Header);