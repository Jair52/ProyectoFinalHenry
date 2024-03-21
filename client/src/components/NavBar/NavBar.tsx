import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Cart from '../Cart/Cart';

interface NavBarProps {
  onItemClick: (item: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onItemClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
          <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link2" onClick={() => handleItemClick('MENU DE LA SEMANA')}>
            <p>INTERFOODS!</p>
          </NavLink>
        </li>
        </ul>
        <ul>
        <li>
          <NavLink to="/menu-semana" className="nav-link" onClick={() => handleItemClick('MENU DE LA SEMANA')}>
            MENU DE LA SEMANA
          </NavLink>
          <NavLink to="/como-funciona" className="nav-link" onClick={() => handleItemClick('COMO FUNCIONA')}>
            COMO FUNCIONA
          </NavLink>
          <NavLink to="/faqs" className="nav-link" onClick={() => handleItemClick('FAQ\'S')}>
            ¿QUIENES SOMOS?
          </NavLink>
           <NavLink to="/faqs" className="nav-link" onClick={() => handleItemClick('FAQ\'S')}>
            FAQ'S
          </NavLink>
        </li>
      </ul>
      <ul>
      <li>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="Logo 2" className="nav-logo" />
      <button onClick={toggleMenu} className='nav-btn'>
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Logo 1" className="nav-logo" />
      </button>
     </li>
     </ul>  
    </nav>
    {showMenu ? <Cart toggleMenu={toggleMenu} /> : ''}  
    </div>

  );
};

export default NavBar;
