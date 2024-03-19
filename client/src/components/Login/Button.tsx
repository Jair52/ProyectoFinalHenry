import { MouseEventHandler, ReactNode } from 'react'

// Por convencion se coloca el nombre del componente, seguido por las props
interface ButtonProps {
  children: ReactNode,
  handleClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <button 
      onClick={handleClick}
      className="button is-primary"
    >
      {children}
    </button>
    )
}

export default Button