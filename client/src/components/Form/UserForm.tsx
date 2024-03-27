import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './UserForm.module.css';
import validateUser from './UserValidate';
import { useNavigate } from 'react-router-dom';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture?: File | null;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  profilePicture: null,
};

const UserForm: React.FC = () => {
  // hook para redireccionar al usuario a otra página
  const history = useNavigate()

  const handleSubmit = (values: FormValues) => {
    handleSubmit(values)
    history('/')
    console
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validateUser}
        onSubmit={handleSubmit}
        >
      {/* es una funcion de formik y nos permite cambiar el valor de un campo de formulario
          de manera manual (para cuando manejamos File) 
          isValid y dirty son validadores para habilitar el botón registrarme*/}
        {({ setFieldValue, isValid, dirty }) => (
          <Form className={styles.form}>
            <h1>Crear cuenta de interfood</h1>
            <div >
              <label htmlFor="firstName">Nombre*:</label>
              <br />
              <Field type="text" id="firstName" name="firstName" className={styles.field} />
              <br />
              <p className={styles.error}><ErrorMessage name="firstName" /></p>
            </div>

            <div>
              <label htmlFor="lastName">Apellido*:</label>
              <br />
              <Field type="text" id="lastName" name="lastName" className={styles.field} />
              <br />
              <p className={styles.error}><ErrorMessage name="lastName" /></p>
            </div>

            <div>
              <label htmlFor="email">Email*:</label>
              <br />
              <Field type="email" id="email" name="email" className={styles.field} />
              <br />
              <p className={styles.error}><ErrorMessage name="email" /></p>
            </div>

            <div>
              <label htmlFor="password">Contraseña*:</label>
              <br />
              <Field type="password" id="password" name="password" className={styles.field} />
              <br />
              <p className={styles.error}><ErrorMessage name="password" /></p>
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirma contraseña*:</label>
              <br />
              <Field type="password" id="confirmPassword" name="confirmPassword" className={styles.field} />
              <br />
              <p className={styles.error}><ErrorMessage name="confirmPassword" /></p>
            </div>

            <div>
              <label htmlFor="profilePicture">Foto de perfil: (formatos en .jpg, .jpeg ó .png)</label>
              <br />
              <input
                className={styles.field}
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) =>
                setFieldValue('profilePicture', event.currentTarget.files?.[0])
                }
              />
              <br />
              <p className={styles.error}><ErrorMessage name="profilePicture" /></p>
            </div>

            <button type="submit" className={styles.send} disabled={!isValid || !dirty}>REGISTRARME</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

