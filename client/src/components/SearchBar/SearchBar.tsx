import React , { useState } from 'react'
import Styles from './SearchBar.module.css'

const SearchBar: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<string>('');

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedType(event.currentTarget.value);
        console.log(event.currentTarget.value);
        //reducer para guardara opcion
        //reducer para hacer el filtrado
    };
    const handleButtonClickcountry = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedCountry(event.currentTarget.value);
        console.log(event.currentTarget.value);
        console.log(selectedCountry);
        //reducer para guardara opcion
        //reducer para hacer el filtrado  
    };


    return (
        <div className={Styles.container}>
        <div>
        <div className={Styles.comida}> 
            <span>
                <button value="Todos" onClick={handleButtonClick} className={selectedType === 'Todos' ? Styles.botoncomida2 : Styles.botoncomida}>Todos</button>
                <button value="Principales" onClick={handleButtonClick} className={selectedType === 'Principales' ? Styles.botoncomida2 : Styles.botoncomida}>Principales</button>
                <button value="Postres" onClick={handleButtonClick} className={selectedType === 'Postres' ? Styles.botoncomida2 : Styles.botoncomida}>Postres</button>
                <button value="Vegano" onClick={handleButtonClick} className={selectedType === 'Vegano' ? Styles.botoncomida2 : Styles.botoncomida}>Vegano</button>
            </span>
        </div>
        <div className={Styles.comida}>
            <span>
                <button value="Todos" onClick={handleButtonClickcountry} className={selectedCountry === 'Todos' ? Styles.botoncomida2 : Styles.botoncomida}>Todos</button>
                <button value="Argentina" onClick={handleButtonClickcountry} className={selectedCountry === 'Argentina' ? Styles.botoncomida2 : Styles.botoncomida}>Argentina</button>
                <button value="Colombia" onClick={handleButtonClickcountry} className={selectedCountry === 'Colombia' ? Styles.botoncomida2 : Styles.botoncomida}>Colombia</button>
                <button value="Mexico" onClick={handleButtonClickcountry} className={selectedCountry === 'Mexico' ? Styles.botoncomida2 : Styles.botoncomida}>Mexico</button>
                <button value="Ecuador" onClick={handleButtonClickcountry} className={selectedCountry === 'Ecuador' ? Styles.botoncomida2 : Styles.botoncomida}>Ecuador</button>
            </span>
        </div>
        </div>
        <div className={Styles.searchbar}>
          <input 
                  type="text"
                  placeholder="Busca la comida..."
               />
              <button type="submit" >Search</button>
        </div>
        </div>
        
    )

}

export default SearchBar;