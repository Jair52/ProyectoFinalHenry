import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from './Detail.module.css'
import Reseñas from "../Reseñas/Reseñas";
import {useSelector} from "react-redux";
import { StoreState } from '../../redux/reducer/Reducer';
import { useState, useEffect } from "react";

const Detail: React.FC = () =>{
  const [idComida, setIdComida] = useState<string>('');
  const [mostrarIngredientes, setMostrarIngredientes] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
      if (id !== undefined) {
          setIdComida(id);
      }
  }, [id]);

  const toggleMostrarIngredientes = () => {
    setMostrarIngredientes(!mostrarIngredientes);
}

  const numeroEntero: number = (parseInt(idComida, 10) - 1);
  const foodState = useSelector((state: StoreState) => state.platos);
  console.log(foodState);
  
   
    return ( 
                    <div className={styles.todo}>
                        <div className={styles.botonatras}>
                            <NavLink to='/NuestrosPlatos'><img className={styles.flechita} src={'https://marketplace.canva.com/mJzgw/MAEkLfmJzgw/1/tl/canva-MAEkLfmJzgw.png'}></img><span className={styles.atras}>Atras</span></NavLink>
                        </div>
                        <div className={styles.container1}>
                          <img className={styles.imagen2} src={foodState[numeroEntero]?.imagen}/>
                            <div className={styles.container2}>
                             <h2 className={styles.name}>{foodState[numeroEntero]?.nombre}<p className={styles.peso}>({foodState[numeroEntero]?.peso}g)</p></h2>
                             <h2 className={styles.descripcion}>{foodState[numeroEntero]?.descripcion}</h2>
                             <div className={styles.calorias}> <p className={styles.caloriastexto}>{foodState[numeroEntero]?.kilocalorias} kilocalorias  |  {foodState[numeroEntero]?.grasas}g grasas  |  {foodState[numeroEntero]?.carbohidratos}g carbohidratos</p></div>
                             <div className={styles.cantidad}>Elije la Cantidad</div>
                             <div className={styles.boton}>
                                 <p className={styles.botontexto1}>-</p>
                                 <p className={styles.botontexto2}>1</p>
                                 <p className={styles.botontexto1}>+</p>
                            </div>
                             <h2 className={styles.status}>{foodState[numeroEntero]?.stock}</h2>
                             <div className={styles.ingredientes}>
                                  <button onClick={toggleMostrarIngredientes} className={styles.ingredientesboton}>{mostrarIngredientes ? <h1 className={styles.ingretitulo}>ingredientes&nbsp;-</h1> : <h1 className={styles.ingretitulo}>ingredientes&nbsp;+</h1>}</button>
                                   {mostrarIngredientes &&
                                   <h2 className={styles.ingretexto}>{foodState[numeroEntero]?.ingredientes.join(', ')}</h2>
                                   }
                             </div>
                           </div>
                          </div>
                          <div><Reseñas/></div>
                </div>
    );
}

export default Detail;

