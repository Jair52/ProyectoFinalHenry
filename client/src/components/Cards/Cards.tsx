import Card from "../Card/Card";
import Style from './Cards.module.css'

interface Food {
  id: number;
  nombre: string;
  imagen: string;
  peso: number;
  costo: number;
}

interface CardsProps {
  numberOfCards?: number; // Prop opcional
}

const Cards: React.FC<CardsProps> = ({ numberOfCards }) => {
  const foods: Food[] = [
    {
      id: 1,
      nombre: "Asado",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 15.99,
      peso: 500,
    },
    {
      id: 2,
      nombre: "Bandeja paisa",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 12.50,
      peso: 700,
    },
    {
      id: 3,
      nombre: "Ceviche",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 9.75,
      peso: 300,
    },
    {
      id: 4,
      nombre: "Tacos",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 8.99,
      peso: 400,
    },
    {
      id: 5,
      nombre: "Empanadas",
      imagen: "https://th.bing.com/th/id/OIP.WZzAMKDjzhhyAf9D2dhpEQHaE7?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      costo: 2.50,
      peso: 200,
    },
  ];

  const limitedFoods = numberOfCards ? foods.slice(0, numberOfCards) : foods;

  return (
    <div className={Style.cards}>
      {limitedFoods.map((food) => (
        <Card
          key={food.id}
          name={food.nombre}
          img={food.imagen}
          weight={food.peso}
          price={food.costo}
          id={food.id}
        />
      ))}
    </div>
  );
};

export default Cards