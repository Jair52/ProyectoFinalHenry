import { getAuth, signOut } from '@firebase/auth';
import Style from './SesionDesplegable.module.css';
import { app } from "../../Auth/firebaseConfig";


interface SesionDesplegableProps {
  toggleMenu: () => void;
}

const SesionDesplegable: React.FC<SesionDesplegableProps> = ({ toggleMenu }) => {
  
  const auth = getAuth(app);

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${Style.container}`)) {
      toggleMenu();
    }
  };

  const cerrarSesion = () => {
      signOut(auth)
      toggleMenu()
  }

  return (
    <div className={Style.pageDesplegable} onClick={handleClickOutside}>
      <div className={Style.container}>
        <button className={Style.btnCerrar} onClick={toggleMenu}>
          x
        </button>
        <button className={Style.btnPerfil}> 
          Mi perfil
        </button>
        <button className={Style.btnCerrarSesion} onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default SesionDesplegable;
