import Style from './SesionDesplegable.module.css';

interface SesionDesplegableProps {
  toggleMenu: () => void;
  setAuth: (value: boolean) => void;
}

const SesionDesplegable: React.FC<SesionDesplegableProps> = ({ toggleMenu, setAuth }) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${Style.container}`)) {
      toggleMenu();
    }
  };

  const handleCerrarSesion = () => {
    setAuth(false);
    toggleMenu();
  };

  return (
    <div className={Style.pageDesplegable} onClick={handleClickOutside}>
      <div className={Style.container}>
        <button className={Style.btnCerrar} onClick={toggleMenu}>
          x
        </button>
        <button className={Style.btnPerfil}> 
          Mi perfil
        </button>
        <button className={Style.btnCerrarSesion} onClick={handleCerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default SesionDesplegable;
