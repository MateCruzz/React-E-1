import React from 'react'
import'./NavBar.css'
import CartWidget from '../CardWidget/CartWidget';



const NavBar = () => {

  return (
    <header>
    <h1>Lyo's Shop</h1>
    <nav>
        <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Productos</li>
        </ul>
    </nav>

<CartWidget/>
</header>
);
};

export default NavBar
