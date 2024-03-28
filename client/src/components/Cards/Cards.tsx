import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Style from './Cards.module.css'
import { StoreState } from "../../redux/reducer/Reducer";

interface Food {
  id: number;
  nombre: string;
  ingredientes: string[];
  kilocalorias: number;
  carbohidratos: number;
  grasas: number;
  peso: number;
  precio: number;
  imagen: string;
  stock: string;
}

interface CardsProps {
  numberOfCards?: number;
}

const Cards: React.FC<CardsProps> = ({ numberOfCards }) => {
  const foodState = useSelector((state: StoreState) => state.filtros);


  const foods: Food[] = foodState;
  

  const limitedFoods = numberOfCards ? foods.slice(0, numberOfCards) : foods;

 
  

  return (
    <div className={Style.cards}>
      {limitedFoods.map((food) => (
        <Card
          stock={food.stock}
          key={food.id}
          name={food.nombre}
          img={food.imagen}
          weight={food.peso}
          price={food.precio}
          id={food.id}
          kilocalorias={food.kilocalorias}
          carbohidratos={food.carbohidratos}
        />
      ))}
    </div>
  );
};

export default Cards