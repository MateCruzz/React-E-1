import React from 'react'
import'./NavBar.css'
import CartWidget from '../CardWidget/CartWidget';



const NavBar = () => {

  return (
    <header className='navbar'>
    <h1>Lyo's Shop</h1>
    <nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/nosotros">Nosotros</a></li>
    <li><a href="/productos">Productos</a></li>
  </ul>
</nav>

<CartWidget/>
</header>
);
};

export default NavBar
