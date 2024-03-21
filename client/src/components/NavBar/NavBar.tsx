
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'; 
import { useState } from 'react';
import Cart from '../Cart/Cart';


interface NavBarProps {
  onItemClick: (item: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onItemClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = (item: string) => {
    onItemClick(item);
  };

  return (
    <div className={styles.navContainer}>
      <div>
        <NavLink to="/" className={styles.parrafo}>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERFOODS</p>
        </NavLink>
      </div>
      <div className={styles.navLinksContainer}>
        <ul>
          <li>
            <NavLink to="/NuestrosPlatos" className={styles.navLink} onClick={() => handleItemClick('MENU DE LA SEMANA')}>
              NUESTROS PLATOS
            </NavLink>
            <NavLink to="/Comofunciona" className={styles.navLink} onClick={() => handleItemClick('COMO FUNCIONA')}>
              COMO FUNCIONA
            </NavLink>
            <NavLink to="/QuienesSomos" className={styles.navLink} onClick={() => handleItemClick('FAQ\'S')}>
              ¿QUIENES SOMOS?
            </NavLink>
            <NavLink to="/Faqs" className={styles.navLink} onClick={() => handleItemClick('FAQ\'S')}>
              FAQ'S
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="Logo 2" className={styles.navLogo} />
        <button onClick={toggleMenu} className={styles.navbtn}>
        <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Logo 1" className={styles.navLogo}/>
      </button>
      </div>
      {showMenu ? <Cart toggleMenu={toggleMenu} /> : ''}
    </div>
  );
};

export default NavBar;