import Style from './Card.module.css'
import React, { useState } from 'react';

interface CardProps {
  name: string;
  img: string;
  weight: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ name, img, weight, price }) => {
  const [cant, setCant] = useState(0)

  const cantSum = () => {
    return setCant(cant !== 5 ? cant+1 : cant)
  }

  const cantRest = () => {
    return setCant(cant !== 0 ? cant-1 : cant)
  }

  return (
    <div className={Style.card}>
      <img src={img} alt={name} className={Style.img}/>
      <div className={Style.conteinerName}>
        <h2 className={Style.name}>{name}</h2>
        <p className={Style.weight}>{weight}g</p>
      </div>
      <div className={Style.conteinerPriceBtn}>
        <p className={Style.price}>${price}</p>
        <div className={Style.conteinerBtn}>
          {cant > 0 ? (
            <>
              <button className={Style.btn} onClick={cantRest}>-</button>
              <span className={Style.cant}>{cant}</span>
              <button className={Style.btn} onClick={cantSum}>+</button>
            </>
          ) : (
            <button className={Style.btnAdd} onClick={cantSum}>Añadir</button>
          )}
        </div>
      </div>
    </div>
  );
  
  
}

export default Card