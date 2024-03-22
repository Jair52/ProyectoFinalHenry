import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './UserForm.module.css';
import validateUser from './UserValidate';


interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture?: File | null;
}



const UserForm: React.FC = () => {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: null,
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // Aquí puedes enviar los datos del formulario a tu backend
  };

  return (
    <div className={styles.container}>
      <h1>Crear cuenta de interfood</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validateUser}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="firstName">Nombre*:</label>
              <br />
              <Field type="text" id="firstName" name="firstName" />
              <br />
              <ErrorMessage name="firstName" />
            </div>

            <div>
              <label htmlFor="lastName">Apellido*:</label>
              <br />
              <Field type="text" id="lastName" name="lastName" />
              <br />
              <ErrorMessage name="lastName" />
            </div>

            <div>
              <label htmlFor="email">Email*:</label>
              <br />
              <Field type="email" id="email" name="email" />
              <br />
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Contraseña*:</label>
              <br />
              <Field type="password" id="password" name="password" />
              <br />
              <ErrorMessage name="password" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirma contraseña*:</label>
              <br />
              <Field type="password" id="confirmPassword" name="confirmPassword" />
              <br />
              <ErrorMessage name="confirmPassword" />
            </div>

            <div>
              <label htmlFor="profilePicture">Foto de perfil: (formatos en .jpg, .jpeg ó .png)</label>
              <br />
              <input
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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;

