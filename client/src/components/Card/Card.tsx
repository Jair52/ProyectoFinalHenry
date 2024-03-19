import Style from './Card.module.css'
import React from 'react';

interface CardProps {
  name: string;
  img: string;
  weight: number;
  price: number;
}

const Card: React.FC<CardProps> = ({ name, img, weight, price }) => {

  return (
    <div className={Style.card}>
      <img src={img} alt={name} className={Style.img}/>
      <div className={Style.conteinerName}>
        <h2 className={Style.name}>{name}</h2>
        <p className={Style.weight}>{weight}g</p>
      </div>
      <div className={Style.conteinerBtn}>
        <p className={Style.price}>${price}</p>
        <button className={Style.btn}>Comprar</button>
      </div>
    </div>
  );
  
}

export default Card