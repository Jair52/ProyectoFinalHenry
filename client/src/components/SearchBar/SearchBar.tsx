import React , { useState } from 'react'
import Styles from './SearchBar.module.css'
import { useDispatch} from 'react-redux';
import { getPais} from '../../redux/actions/Actions';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedType, setSelectedType] = useState<string>('Todosa');
    const [selectedCountry, setSelectedCountry] = useState<string>('Todos');

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedType(event.currentTarget.value);
        dispatch(getPais(event.currentTarget.value))  
    };
    const handleButtonClickcountry = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedCountry(event.currentTarget.value);
        dispatch(getPais(event.currentTarget.value))
      
        //reducer para guardara opcion
        //reducer para hacer el filtrado  
    };


    return (
        <div className={Styles.container}>
        <div>
        <div className={Styles.comida}> 
            <span>
                <button value="Todosa" onClick={handleButtonClick} className={selectedType === 'Todosa' ? Styles.botoncomida2 : Styles.botoncomida}>Todos</button>
                <button value='plato fuerte' onClick={handleButtonClick} className={selectedType === 'plato fuerte' ? Styles.botoncomida2 : Styles.botoncomida}>Principales</button>
                <button value='postre' onClick={handleButtonClick} className={selectedType === 'postre' ? Styles.botoncomida2 : Styles.botoncomida}>Postres</button>
                <button value='plato vegano' onClick={handleButtonClick} className={selectedType === 'plato vegano' ? Styles.botoncomida2 : Styles.botoncomida}>Vegano</button>
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
          {/* <input 
                  type="text"
                  placeholder="Busca la comida..."
               />
              <button type="submit" >Search</button> */}
        </div>
        </div>
        
    )

}

export default SearchBar;