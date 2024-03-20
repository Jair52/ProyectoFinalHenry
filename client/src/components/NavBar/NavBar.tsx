import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {
  onItemClick: (item: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onItemClick }) => {
  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  return (
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
      <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Logo 1" className="nav-logo" />
      <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="Logo 2" className="nav-logo" />
     </li>
     </ul>    
    </nav>
  );
};

export default NavBar;
