import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header-links">
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-btn">
              <FontAwesomeIcon icon={ faCartShopping } size={ '2x' } />
              <span>Checkout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
