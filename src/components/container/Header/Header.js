import React, {useState} from 'react';

import './Header.css'

const Header = () => {
  const [order] = useState(0)
  return (
    <div className="header">
      <div className="logo">
          <img src="https://img.icons8.com/clouds/100/000000/duolingo-logo.png" alt="" />
      </div>
      <div className="trolley">
          <img src="https://img.icons8.com/doodle/48/000000/shopping-cart.png" alt="" />
          <span>{order}</span>
      </div>
    </div>
  )
}


export default Header;