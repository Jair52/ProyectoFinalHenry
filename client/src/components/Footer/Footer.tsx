import Style from './Footer.module.css'

const Footer = () => {
  return(
    <footer className={Style.footer}>
      <div className={Style.conteiner}>
        <h3 className={Style.title}>INTERFOODS!</h3>
        <div className={Style.conteinerList}>
          <h3 className={Style.links}>Nuestros platos</h3>
          <h3 className={Style.links}>Como funciona</h3>
          <h3 className={Style.links}>¿Quienes somos?</h3>
          <h3 className={Style.links}>FAQ'S</h3>
        </div>
        <div className={Style.conteinerList}>
          <h3 className={Style.links}> Mis compras</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer