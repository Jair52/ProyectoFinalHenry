import { NavLink } from 'react-router-dom';
import Style from './Card.module.css'
import React, { useState, useEffect } from 'react';


interface CardProps {
  name: string;
  img: string;
  weight: number;
  price: number;
  id: number;
}

const Card: React.FC<CardProps> = ({ name, img, weight, price, id }) => {
  const [cant, setCant] = useState<number>(0);

  useEffect(() => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
      const cartItems = JSON.parse(existingCart);
      const item = cartItems.find((item: any) => item.id === id);
      if (item) {
        setCant(item.quantity); 
      } else {
        setCant(0);
      }
    }
  });


  const addToCart = () => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
      const cartItems = JSON.parse(existingCart);
      const itemIndex = cartItems.findIndex((item: any) => item.id === id);
      if (itemIndex !== -1) {
        cartItems[itemIndex].quantity += 1;
      } else {
        cartItems.push({ id, name, img, weight, price, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([{ id, name, img, weight, price, quantity: 1 }])
      );
    }
    setCant(prevCant => prevCant + 1);
  };

  const removeFromCart = () => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
      const cartItems = JSON.parse(existingCart);
      const itemIndex = cartItems.findIndex((item: any) => item.id === id);
      if (itemIndex !== -1) {
        if (cartItems[itemIndex].quantity === 1) {
          cartItems.splice(itemIndex, 1);
        } else {
          cartItems[itemIndex].quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCant(prevCant => prevCant > 0 ? prevCant - 1 : 0);
      }
    }
  };

  return (

    <div className={Style.card}>
      <NavLink to={`/detail/${id}`} className={Style.navLink}>
      <img src={img} alt={name} className={Style.img}/>
      <div className={Style.conteinerName}>
        <h2 className={Style.name}>{name}</h2>
        <p className={Style.weight}>{weight}g</p>
      </div>
      </NavLink>
      <div className={Style.conteinerPriceBtn}>
        <p className={Style.price}>${price}</p>
      <div className={Style.conteinerBtn}>
          {cant > 0 ? (
            <>
              <button className={Style.btn} onClick={removeFromCart}>-</button>
              <span className={Style.cant}>{cant}</span>
              <button className={Style.btn} onClick={addToCart}>+</button>
            </>
          ) : (
            <button className={Style.btnAdd} onClick={addToCart}>Añadir</button>
          )}
        </div>
      </div>
    </div>
  );
  
  
}

export default Card