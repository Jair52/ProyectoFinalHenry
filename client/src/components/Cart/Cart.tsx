import React, { useState } from 'react';
import Style from './Cart.module.css';

interface Food {
  id: number;
  nombre: string;
  imagen: string;
  peso: number;
  costo: number;
  cantidad: number;
}

interface CartProps {
  toggleMenu: () => void;
}

const Cart: React.FC<CartProps> = ({ toggleMenu }) => {
  const [foods, setFoods] = useState<Food[]>([
    {
      id: 1,
      nombre: "Asado",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 15.99,
      peso: 500,
      cantidad: 3
    },
    {
      id: 3,
      nombre: "Ceviche",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 9.75,
      peso: 300,
      cantidad: 1
    },
    {
      id: 4,
      nombre: "Tacos",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 8.99,
      peso: 400,
      cantidad: 2
    },
  ]);

  const calcularTotal = () => {
    return foods.reduce((total, food) => total + (food.costo * food.cantidad), 0);
  };

  const incrementarCantidad = (id: number) => {
    setFoods(prevFoods => prevFoods.map(food => {
      if (food.id === id) {
        return { ...food, cantidad: food.cantidad + 1 };
      }
      return food;
    }));
  };

  const decrementarCantidad = (id: number) => {
    setFoods(prevFoods => prevFoods.map(food => {
      if (food.id === id && food.cantidad > 0) {
        return { ...food, cantidad: food.cantidad - 1 };
      }
      return food;
    }));
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${Style.cart}`)) {
      toggleMenu();
    }
  };

  return (
    <div className={Style.pageCart} onClick={handleClickOutside}>
      <div className={Style.cart}>
        <h2 className={Style.cartTitle}>Carrito</h2>
        <button className={Style.closeButton} onClick={toggleMenu}>X</button>
        <div className={Style.itemsContainer}>
          {foods.map((food) => (
            <div key={food.id} className={Style.cartItem}>
              <div className={Style.containerInfo}>
                <div className={Style.info}>
                  <img src={food.imagen} alt={food.nombre} className={Style.itemImage} />
                  <p className={Style.name}>{food.nombre}</p>
                  <button onClick={() => decrementarCantidad(food.id)} className={Style.btnCant}>-</button>
                  <p>{food.cantidad}</p>
                  <button onClick={() => incrementarCantidad(food.id)} className={Style.btnCant}>+</button>
                </div>
                <div className={Style.precio}>              
                  <p>Precio unitario: ${food.costo.toFixed(2)}</p>
                  <p>Precio total: ${(food.costo * food.cantidad).toFixed(2)}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className={Style.totalContainer}>
        <p className={Style.totalAmount}>Total a pagar: ${calcularTotal().toFixed(2)}</p>
        <button className={Style.checkoutButton}>Comprar</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
