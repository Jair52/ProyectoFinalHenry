import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from 'react';
import Input from './Input';
import Button from './Button';
import Validation, { ValidationErrors } from './Validation';
import styles from './Login.module.css';

type UserLoginState = {
  email: string;
  password: string;
};

const InitialValue: UserLoginState = {
  email: '',
  password: '',
};

interface UserLoginProps {
  handleSubmit: (user: UserLoginState) => void;
}

const Login = ({ handleSubmit }: UserLoginProps) => {
  const [login, setLogin] = useState(InitialValue);
  const [errors, setErrors] = useState<ValidationErrors>({});

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
      handleSubmit(login);
      setLogin(InitialValue);
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginContainer}>
        <h2 className={styles.loginHeading}>Inicio de sesión</h2>
        <div className={styles.introText}>
          Introduce tu cuenta de siempre en InterFoods o regístrate si es tu primera vez.
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
            INICIAR SESION
          </Button>
        </div>
        <div className={styles.forgetandcreates}>
          <a href="/register">Crear cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;