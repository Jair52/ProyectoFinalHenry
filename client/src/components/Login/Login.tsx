import { ChangeEventHandler,  FocusEventHandler,  MouseEventHandler,  useState } from 'react'
import Input from './Input'
import Button from './Button'
import Validation, {ValidationErrors} from './Validation'

type UserLoginState = {
  email: string,
  password: string,
}

const InitialValue: UserLoginState = {
  email: '',
  password: '',
}


interface UserLoginProps {
  // le vamos a pasar todos los datos (state) del login, en el submit
  handleSubmit: (user: UserLoginState) => void
}

const Login = ({handleSubmit}: UserLoginProps ) => {

  const [login, setLogin] = useState(InitialValue)
  const [errors, setErrors] = useState<ValidationErrors>({})

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserLoginState
    setLogin( state => ({
      ...state,
      [name]: e.target.value,
    }))
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserLoginState
    const validateErrors = Validation({...login, [name]: 
      e.target.value})
      setErrors(validateErrors)
  }

const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()
  const validateErrors = Validation(login)
  setErrors(validateErrors) 

  if(Object.keys(validateErrors).length === 0){
    handleSubmit(login)
    setLogin(InitialValue)
  }
}

  return (
    <>
    {errors.email && <p>{errors.email}</p>}
      <Input 
        type='email' 
        value={login.email} 
        name = 'email' 
        placeholder='Email' 
        handleChange={handleChange} 
        onBlur={handleBlur}
        required
        />
    {errors.password && <p>{errors.password}</p>}
      <Input 
        type='password' 
        value={login.password} 
        name = 'password' 
        placeholder='Password' 
        handleChange={handleChange} 
        onBlur={handleBlur}
        required
        />
      <Button handleClick={handleClick}>Send</Button>
    </>
  )
}

export default Login



