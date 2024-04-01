import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from 'react';
import Input from './Input';
import Button from './Button';
import Validation, { ValidationErrors } from './Validation';
import styles from './Register.module.css';
import { useDispatch } from 'react-redux';
import { signUpNewUser } from '../../redux/actions/Actions';
import { GoogleAuthProvider, getAuth, signInWithRedirect } from '@firebase/auth';
import { app } from '../../Auth/firebaseConfig';

type UserLoginState = {
  email: string;
  password: string;
};

const InitialValue: UserLoginState = {
  email: '',
  password: '',
};

const Register = () => {
  const [login, setLogin] = useState(InitialValue);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const dispatch = useDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserLoginState;
    setLogin((state) => ({
      ...state,
      [name]: e.target.value,
    }));
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name as keyof UserLoginState;
    const validateErrors = Validation({ ...login, [name]: e.target.value });
    setErrors(validateErrors);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const validateErrors = Validation(login);
    setErrors(validateErrors);
  
    if (Object.keys(validateErrors).length === 0) {
      signUp(); 
      setLogin(InitialValue);
    }
  };
  
  
  const signUp = async () => {
    try {
      await dispatch(signUpNewUser(login.email, login.password)); 
      console.log("Cuenta creada");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginHeading}>Crear cuenta</h2>
        <div className={styles.introText}>
          Regístrate si es tu primera vez o introduce tu cuenta de siempre en InterFoods.
        </div>
        {errors.email && <p className={styles.inputError}>{errors.email}</p>}
        <div className={styles.inputContainer}>
          <Input
            type="email"
            value={login.email}
            name="email"
            placeholder="Email"
            handleChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.password && <p className={styles.inputError}>{errors.password}</p>}
        <div className={styles.inputContainer}>
          <Input
            type="password"
            value={login.password}
            name="password"
            placeholder="Password"
            handleChange={handleChange}
            onBlur={handleBlur}
            required
          />
        </div>
        <div className={styles.forgetandcreate}>
          <a href="/forgot-password">¿Olvidaste la contraseña?</a>
        </div>
        <div className={styles.buttonSub}>
          <Button className={styles.submitButton} handleClick={handleClick}>
            CREAR CUENTA
          </Button>
        </div>
        <div className={styles.forgetandcreates}>
          <a href="/Login">Iniciar sesion</a>
        </div>
      </div>
    </div>
  );
};

export default Register