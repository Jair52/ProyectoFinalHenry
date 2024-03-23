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
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <h1>Crear cuenta de interfood</h1>
            <div >
              <label htmlFor="firstName">Nombre*:</label>
              <br />
              <Field type="text" id="firstName" name="firstName" className={styles.field} />
              <br />
              <ErrorMessage name="firstName" />
            </div>

            <div>
              <label htmlFor="lastName">Apellido*:</label>
              <br />
              <Field type="text" id="lastName" name="lastName" className={styles.field} />
              <br />
              <ErrorMessage name="lastName" />
            </div>

            <div>
              <label htmlFor="email">Email*:</label>
              <br />
              <Field type="email" id="email" name="email" className={styles.field} />
              <br />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Contraseña*:</label>
              <br />
              <Field type="password" id="password" name="password" className={styles.field} />
              <br />
              <ErrorMessage name="password" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirma contraseña*:</label>
              <br />
              <Field type="password" id="confirmPassword" name="confirmPassword" className={styles.field} />
              <br />
              <ErrorMessage name="confirmPassword" />
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
              <ErrorMessage name="profilePicture" />
            </div>

            <button type="submit" className={styles.send}>REGISTRARME</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

