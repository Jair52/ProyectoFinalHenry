// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styles from './FormMeal.module.css';
// import ValidationSchema from './ValidationSchema';

// interface PropsCreateMeal {
//   nombre: string;
//   origen: string;
//   ingredientes: string[];
//   carbohidratos: number | null;
//   grasas: number | null;
//   peso: number | null;
//   precio: number | null;
//   tipo: string;
//   imagen: File | null;
//   descripcion: string | null;
//   stock: number | null;
//   ingrediente: string;
  
// }

// // Componente del formulario
// const UserForm: React.FC = () => {
//   // Valores iniciales del formulario
//   const initialValues: PropsCreateMeal = {
//     nombre: '',
//     origen: '',
//     ingredientes: [],
//     carbohidratos: null,
//     grasas: null,
//     peso: null,
//     precio: null,
//     tipo: '',
//     imagen: null,
//     descripcion: '',
//     stock: null,
//     ingrediente: ''
//   };

//   // Manejar el envío del formulario
//   const handleSubmit = (values: PropsCreateMeal) => {
//     // Aquí podrías enviar los valores al backend
//     console.log(values);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={ValidationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ values, setFieldValue, isValid, dirty }) => (
//         <Form>
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <br />
//           <label htmlFor='nombre'>Nombre del plato:</label>
//           <Field placeholder='Nombre del plato' type='text' name='nombre' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='nombre' /></p>
//           <br />
//           <label htmlFor='origen'>País del plato:</label>
//           <Field placeholder='País del plato' type='text' name='origen' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='origen' /></p>
//           <div>
//             <label htmlFor='ingredientes'>Ingredientes:</label>
//             <br />
//             <Field name='ingrediente' className={styles.field} />
//             <button
//               type='button'
//               onClick={() => {
//                 const newIngredient = values.ingrediente.trim();
//                 if (typeof newIngredient === 'string' && newIngredient !== '' && !values.ingredientes.includes(newIngredient)) {
//                   setFieldValue('ingredientes', [...values.ingredientes, newIngredient]);
//                   setFieldValue('ingrediente', '');
//                 }
//               }}
//             >
//               AGREGAR
//             </button>
//           </div>
//           <ErrorMessage name='ingredientes' component='div' className={styles.error} />
          
//           {values.ingredientes.length > 0 && (
//             <ul>
//               {values.ingredientes.map((ingrediente, index) => (
//                 <li key={index}>
//                   {ingrediente}
//                   <button
//                     type='button'
//                     onClick={() => {
//                       const newIngredients = values.ingredientes.filter((_, i) => i !== index);
//                       setFieldValue('ingredientes', newIngredients);
//                     }}
//                   >
//                     Eliminar
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}

//           <label htmlFor='carbohidratos'>Carbohidratos (gr):</label>
//           <Field placeholder='Carbohidratos' type='text' name='carbohidratos' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='carbohidratos' /></p>
//           <br />

//           <label htmlFor='grasas'>Grasas (gr):</label>
//           <Field placeholder='Grasas' type='text' name='grasas' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='grasas' /></p>
//           <br />

//           <label htmlFor='peso'>Peso (gr):</label>
//           <Field placeholder='Peso' type='text' name='peso' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='peso' /></p>
//           <br />

//           <label htmlFor='precio'>Precio (USD):</label>
//           <Field placeholder='Precio' type='text' name='precio' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='precio' /></p>
//           <br />

//           <label htmlFor='tipo'>Tipo:</label>
//           <Field as='select' id='tipo' name='tipo'>
//             <option value=''>Seleccione un tipo</option>
//             <option value='plato fuerte'>Plato fuerte</option>
//             <option value='vegano'>Vegano</option>
//             <option value='postre'>Postre</option>
//           </Field>
//           <p className={styles.error}><ErrorMessage name='tipo' /></p>
//           <br />
//           <label htmlFor='image'>Foto del plato: (formatos en .jpg, .jpeg ó .png)</label>
//           <br />
//           <input
//             className={styles.field}
//             type='file'
//             id='image'
//             name='image'
//             accept='image/png, image/jpeg, image/jpg'
//             onChange={(event) =>
//               setFieldValue('image', event.currentTarget.files?.[0])
//             }
//           />
//           <br />
//           <p className={styles.error}><ErrorMessage name='image' /></p>

//           <label htmlFor='cantidad'>Cantidad (unidades):</label>
//           <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='cantidad' /></p>

//           <button type='submit' className={styles.send} disabled={!isValid || !dirty}>Enviar</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default UserForm;



import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './FormMeal.module.css';
import ValidationSchema from './ValidationSchema';

interface PropsCreateMeal {
  nombre: string;
  origen: string;
  ingredientes: string[];
  carbohidratos: number | null;
  grasas: number | null;
  peso: number | null;
  precio: number | null;
  tipo: string;
  imagen: File | null;
  descripcion: string | null;
  stock: number | null;
  ingrediente: string;
}

const UserForm: React.FC = () => {
  const initialValues: PropsCreateMeal = {
    nombre: '',
    origen: '',
    ingredientes: [],
    carbohidratos: null,
    grasas: null,
    peso: null,
    precio: null,
    tipo: '',
    imagen: null,
    descripcion: '',
    stock: null,
    ingrediente: ''
  };

  const handleSubmit = (values: PropsCreateMeal) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isValid, dirty }) => (
        <Form>
          <div className={styles.formContainer}>
            <label htmlFor='nombre' className={styles.label}>Nombre del plato:</label>
            <Field placeholder='Nombre del plato' type='text' name='nombre' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='nombre' /></p>

            <label htmlFor='origen' className={styles.label}>País del plato:</label>
            <Field placeholder='País del plato' type='text' name='origen' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='origen' /></p>

            <div>
              <label htmlFor='ingredientes' className={styles.label}>Ingredientes:</label>
              <br />
              <Field placeholder='ingredientes' name='ingrediente' className={styles.inputField} />
              <button
                type='button'
                
                className={styles.addButton}
                onClick={() => {
                  const newIngredient = values.ingrediente.trim();
                  if (typeof newIngredient === 'string' && newIngredient !== '' && !values.ingredientes.includes(newIngredient)) {
                    setFieldValue('ingredientes', [...values.ingredientes, newIngredient]);
                    setFieldValue('ingrediente', '');
                  }
                }}
              >
                AGREGAR
              </button>
            </div>
            <ErrorMessage name='ingredientes' component='div' className={styles.error} />
            
            {values.ingredientes.length > 0 && (
              <ul className={styles.ingredientList}>
                {values.ingredientes.map((ingrediente, index) => (
                  <li key={index} className={styles.ingredientListItem}>
                    {ingrediente}
                    <button
                      type='button'
                      className={styles.deleteButton}
                      onClick={() => {
                        const newIngredients = values.ingredientes.filter((_, i) => i !== index);
                        setFieldValue('ingredientes', newIngredients);
                      }}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <label htmlFor='carbohidratos' className={styles.label}>Carbohidratos (gr):</label>
            <Field placeholder='Carbohidratos' type='text' name='carbohidratos' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='carbohidratos' /></p>

            <label htmlFor='grasas' className={styles.label}>Grasas (gr):</label>
            <Field placeholder='Grasas' type='text' name='grasas' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='grasas' /></p>

            <label htmlFor='peso' className={styles.label}>Peso (gr):</label>
            <Field placeholder='Peso' type='text' name='peso' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='peso' /></p>

            <label htmlFor='precio' className={styles.label}>Precio (USD):</label>
            <Field placeholder='Precio' type='text' name='precio' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='precio' /></p>

            <label htmlFor='tipo' className={styles.label}>Tipo:</label>
            <Field as='select' id='tipo' name='tipo' className={styles.inputField}>
              <option value=''>Seleccione un tipo</option>
              <option value='plato fuerte'>Plato fuerte</option>
              <option value='vegano'>Vegano</option>
              <option value='postre'>Postre</option>
            </Field>
            <p className={styles.error}><ErrorMessage name='tipo' /></p>

            <label htmlFor='image' className={styles.label}>Foto del plato: (formatos en .jpg, .jpeg ó .png)</label>
            <br />
            <input
              className={styles.inputField}
              type='file'
              id='image'
              name='image'
              accept='image/png, image/jpeg, image/jpg'
              onChange={(event) =>
                setFieldValue('image', event.currentTarget.files?.[0])
              }
            />
            <p className={styles.error}><ErrorMessage name='image' /></p>

            <label htmlFor='cantidad' className={styles.label}>Cantidad (unidades):</label>
            <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.inputField} />
            <p className={styles.error}><ErrorMessage name='cantidad' /></p>

            <button type='submit' className={styles.submitButton} disabled={!isValid || !dirty}>Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

