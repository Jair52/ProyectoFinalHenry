import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css'
import Reseñas from "../Reseñas/Reseñas";


interface comida {
    idcomida: any;
    name: string;
    description: string;
    image?: string;
    ingredientes: string;
    peso: number;
    calorias: number;
    status: string;
}

const Detail: React.FC = () =>{
    const { id } = useParams<{ id: string }>();
    const [comida, setcomida] = useState<comida>({ idcomida: 0, name: "Milanesa con pure", description: "esta es una milanesa con pure y comida y pure y comida y pure y comida y pure y comida", image: "https://preview.redd.it/nada-mejor-que-unas-milanesas-con-pure-que-opinan-ustedes-v0-3f5xb34hjmab1.jpg?auto=webp&s=ed8aba96a165109b76bee38db50bc91056fec1cd", ingredientes : "milanesa y pure", peso: 250, calorias: 500, status: "AGOTADO"});
    useEffect(() => {
        setcomida(prevState => ({ ...prevState, idcomida: id }));
    }, [id]);
    return ( 
                    <div className={styles.todo}>
                        <div className={styles.botonatras}>
                            <button>hola</button>
                        </div>
                        <div className={styles.container1}>
                          <img className={styles.imagen2} src={comida.image}/>
                            <div className={styles.container2}>
                             <h2 className={styles.name}>{comida.name}<p className={styles.peso}>({comida.peso}g)</p></h2>
                             <h2 className={styles.descripcion}>{comida.description}</h2>
                             <div className={styles.calorias}> <p className={styles.caloriastexto}>50 calorias | 25g proteinas | 28g grasas </p></div>
                             <div className={styles.cantidad}>Elije la Cantidad</div>
                             <div className={styles.boton}>
                                 <p className={styles.botontexto1}>-</p>
                                 <p className={styles.botontexto2}>1</p>
                                 <p className={styles.botontexto1}>+</p>
                            </div>
                             <h2 className={styles.status}>{comida.status}</h2>
                             <div className={styles.ingredientes}>
                                <h1 className={styles.ingretitulo}>ingredientes</h1>
                                <h2 className={styles.ingretexto}>esto tiene milanesa y pure y muchas otras cosas que no se que poner para rrellenar</h2>
                             </div>
                           </div>
                          </div>
                          <div><Reseñas/></div>
                </div>
    );
}

export default Detail;

