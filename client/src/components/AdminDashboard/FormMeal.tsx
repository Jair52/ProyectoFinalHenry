// // import React from 'react';
// // import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
// // import styles from './FormMeal.module.css';
// // import ValidationSchema from './ValidationSchema';


// // // Definir el tipo para los valores del formulario
// // interface PropsCreateMeal {
// //   nombre: string;
// //   origen: string;
// //   ingredientes: string[];
// //   carbohidratos: number | null;
// //   grasas: number | null;
// //   peso: number | null;
// //   precio: number | null;
// //   tipo: string;
// //   image: File | null;
// //   cantidad: number | null;
// //   descripcion: string;
// // }

// // // Componente del formulario
// // const FormMeal: React.FC = () => {
// //   // Valores iniciales del formulario
// //   const initialValues: PropsCreateMeal = {
// //     nombre: '',
// //     origen: '',
// //     ingredientes: [],
// //     carbohidratos: null,
// //     grasas: null,
// //     peso: null,
// //     precio: null,
// //     tipo: '',
// //     image: null,
// //     cantidad: null,
// //     descripcion: '',
// //   };



// //   // Manejar el envío del formulario
// //   const handleSubmit = (values: PropsCreateMeal) => {
// //     // Aquí podrías enviar los valores al backend
// //     console.log(values);
// //   };
// // // Principales, Postre Vegano
// //   return (
// //     <Formik
// //       initialValues={initialValues}
// //       validationSchema={ValidationSchema}
// //       onSubmit={handleSubmit}
// //     >
// //       {({ values, setFieldValue, isValid, dirty }) => (
// //         <Form>
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <br />
// //           <label htmlFor='nombre'>Nombre del plato:</label>
// //           <Field placeholder='Nombre del plato' type='text' name='nombre' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='nombre' /></p>
// //           <br />
// //           <label htmlFor='origen'>País del plato:</label>
// //           <Field placeholder='País del plato' type='text' name='origen' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='origen' /></p>
// //           <FieldArray name="ingredientes">
// //             {({ push, remove }) => (
// //               <div>
// //                 {values.ingredientes && values.ingredientes.length > 0 ? (
// //                   values.ingredientes.map((ingrediente, index) => (
// //                     <div key={index}>
// //                       <Field
// //                         name={`ingredientes.${index}`}
// //                         placeholder="Ingrese un ingrediente"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={() => remove(index)} // Remover ingrediente
// //                       >
// //                         -
// //                       </button>
// //                       <p className={styles.error}><ErrorMessage
// //                         name={`ingredientes.${index}`}
// //                         component="div"
// //                         className="field-error"
// //                       /></p>
// //                     </div>
// //                   ))
// //                 ) : (
// //                   <button type="button" onClick={() => push('')}>
// //                     {/* Botón para agregar el primer ingrediente si la lista está vacía */}
// //                     Agregar Ingrediente
// //                   </button>
// //                 )}
// //                 <button
// //                   type="button"
// //                   onClick={() => push('')} // Agregar un nuevo input para ingrediente
// //                 >
// //                   + Agregar otro ingrediente
// //                 </button>
// //               </div>
// //             )}
// //           </FieldArray>
// //           <label htmlFor='carbohidratos'>Carbohidratos (gr):</label>
// //           <Field placeholder='Carbohidratos' type='text' name='carbohidratos' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='carbohidratos' /></p>
// //           <br />

// //           <label htmlFor='grasas'>Grasas (gr):</label>
// //           <Field placeholder='Grasas' type='text' name='grasas' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='grasas' /></p>
// //           <br />

// //           <label htmlFor='peso'>Peso (gr):</label>
// //           <Field placeholder='Peso' type='text' name='peso' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='peso' /></p>
// //           <br />

// //           <label htmlFor='precio'>Precio (USD):</label>
// //           <Field placeholder='Precio' type='text' name='precio' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='precio' /></p>
// //           <br />

// //           <label htmlFor='tipo'>Tipo:</label>
// //           <Field as='select' id='tipo' name='tipo'>
// //             <option value=''>Seleccione un tipo</option>
// //             <option value='plato fuerte'>Plato fuerte</option>
// //             <option value='vegano'>Vegano</option>
// //             <option value='postre'>Postre</option>
// //           </Field>
// //           <p className={styles.error}><ErrorMessage name='tipo' /></p>
// //           <br />
// //           <label htmlFor='image'>Foto del plato: (formatos en .jpg, .jpeg ó .png)</label>
// //               <br />
// //               <input
// //                 className={styles.field}
// //                 type='file'
// //                 id='image'
// //                 name='image'
// //                 accept='image/png, image/jpeg, image/jpg'
// //                 onChange={(event) =>
// //                 setFieldValue('image', event.currentTarget.files?.[0])
// //                 }
// //               />
// //               <br />
// //               <p className={styles.error}><ErrorMessage name='image' /></p>

// //           <label htmlFor='cantidad'>Cantidad (unidades):</label>
// //           <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.field} />
// //           <br />
// //           <p className={styles.error}><ErrorMessage name='cantidad' /></p>

// //           <button type='submit' className={styles.send} disabled={!isValid || !dirty }>Enviar</button>
// //         </Form>
// //       )}
// //     </Formik>
// //   );
// // };

// // export default FormMeal;


// import React from 'react';
// import { Formik, Form, Field,  ErrorMessage } from 'formik';
// import styles from './FormMeal.module.css';
// import ValidationSchema from './ValidationSchema';


// // Definir el tipo para los valores del formulario
// interface PropsCreateMeal {
//   nombre: string;
//   origen: string;
//   ingredientes: string[];
//   carbohidratos: number | null;
//   grasas: number | null;
//   peso: number | null;
//   precio: number | null;
//   tipo: string;
//   image: File | null;
//   cantidad: number | null;
// }

// // Componente del formulario
// const FormMeal: React.FC = () => {
//   // Valores iniciales del formulario
//   const initialValues: PropsCreateMeal = {
//     nombre: '',
//     origen: '',
//     ingredientes: [''],
//     carbohidratos: null,
//     grasas: null,
//     peso: null,
//     precio: null,
//     tipo: '',
//     image: null,
//     cantidad: null,
//   };



//   // Manejar el envío del formulario
//   const handleSubmit = (values: PropsCreateMeal) => {
//     // Aquí podrías enviar los valores al backend
//     console.log(values);
//   };
// // Principales, Postre Vegano
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
//             <label htmlFor='Ingredientes:'>Ingredientes:</label>
//             <br />
//             <Field name='ingrediente' className={styles.field} />

//             <button type='button' onClick={() => {
//               const newIngredient = values.ingredientes
//               if( newIngredient && values.ingredientes.length > 0 ) {
//                 setFieldValue('ingredientes',[...values.ingredientes, values.ingredientes]);
//                 setFieldValue('ingrediente', '')
//               }
//             }}>
//               AGREGAR
//             </button>
//           </div>
//           <ErrorMessage name='ingredientes' component='div' className={styles.error} />
          
//           {values.ingredientes. length > 0 && (

//             <ul>
//             {values.ingredientes.map((ingrediente, index) => (
//               <li key={index}>
//                 console.log(ingrediente)
//                 console.log(ingrediente);
                
//                 {ingrediente}
//                 <button type='button' onClick={() => {
//                   const newIngredient = [...values.ingredientes];
//                   console.log(newIngredient)
//                   newIngredient.splice(index, 1);
//                   setFieldValue('ingredientes', newIngredient)
//                 }}>
//                   Eliminar
//                 </button>
//               </li>
//             ))}
//           </ul>
//             )}

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
//               <br />
//               <input
//                 className={styles.field}
//                 type='file'
//                 id='image'
//                 name='image'
//                 accept='image/png, image/jpeg, image/jpg'
//                 onChange={(event) =>
//                 setFieldValue('image', event.currentTarget.files?.[0])
//                 }
//               />
//               <br />
//               <p className={styles.error}><ErrorMessage name='image' /></p>

//           <label htmlFor='cantidad'>Cantidad (unidades):</label>
//           <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.field} />
//           <br />
//           <p className={styles.error}><ErrorMessage name='cantidad' /></p>

//           <button type='submit' className={styles.send} disabled={!isValid || !dirty }>Enviar</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FormMeal;


import React from 'react';
import { Formik, Form, Field,  ErrorMessage } from 'formik';
import styles from './FormMeal.module.css';
import ValidationSchema from './ValidationSchema';


// Definir el tipo para los valores del formulario
interface PropsCreateMeal {
  nombre: string;
  origen: string;
  ingredientes: string[];
  carbohidratos: number | null;
  grasas: number | null;
  peso: number | null;
  precio: number | null;
  tipo: string;
  image: File | null;
  cantidad: number | null;
}

// Componente del formulario
const UserForm: React.FC = () => {
  // Valores iniciales del formulario
  const initialValues: PropsCreateMeal = {
    nombre: '',
    origen: '',
    ingredientes: [''],
    carbohidratos: null,
    grasas: null,
    peso: null,
    precio: null,
    tipo: '',
    image: null,
    cantidad: null,
  };



  // Manejar el envío del formulario
  const handleSubmit = (values: PropsCreateMeal) => {
    // Aquí podrías enviar los valores al backend
    console.log(values);
  };
// Principales, Postre Vegano
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isValid, dirty }) => (
        <Form>

          <label htmlFor='nombre'>Nombre del plato:</label>
          <Field placeholder='Nombre del plato' type='text' name='nombre' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='nombre' /></p>
          <br />
          <label htmlFor='origen'>País del plato:</label>
          <Field placeholder='País del plato' type='text' name='origen' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='origen' /></p>
          <div>
            <label htmlFor='Ingredientes:'>Ingredientes:</label>
            <br />
            <Field name='ingrediente' className={styles.field} />

            <button type='button' onClick={() => {
              const newIngredient = values.ingredientes
              if( newIngredient && values.ingredientes.length > 0 ) {
                setFieldValue('ingredientes',[...values.ingredientes, values.ingredientes]);
                setFieldValue('ingrediente', '')
              }
            }}>
              AGREGAR
            </button>
          </div>
          <ErrorMessage name='ingredientes' component='div' className={styles.error} />
          
          {values.ingredientes. length > 0 && (

            <ul>
            {values.ingredientes.map((ingrediente, index) => (
              <li key={index}>                
                {ingrediente}
                <button type='button' onClick={() => {
                  const newIngredient = [...values.ingredientes];
                  console.log(newIngredient)
                  newIngredient.splice(index, 1);
                  setFieldValue('ingredientes', newIngredient)
                }}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
            )}

          <label htmlFor='carbohidratos'>Carbohidratos (gr):</label>
          <Field placeholder='Carbohidratos' type='text' name='carbohidratos' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='carbohidratos' /></p>
          <br />

          <label htmlFor='grasas'>Grasas (gr):</label>
          <Field placeholder='Grasas' type='text' name='grasas' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='grasas' /></p>
          <br />

          <label htmlFor='peso'>Peso (gr):</label>
          <Field placeholder='Peso' type='text' name='peso' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='peso' /></p>
          <br />

          <label htmlFor='precio'>Precio (USD):</label>
          <Field placeholder='Precio' type='text' name='precio' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='precio' /></p>
          <br />

          <label htmlFor='tipo'>Tipo:</label>
          <Field as='select' id='tipo' name='tipo'>
            <option value=''>Seleccione un tipo</option>
            <option value='plato fuerte'>Plato fuerte</option>
            <option value='vegano'>Vegano</option>
            <option value='postre'>Postre</option>
          </Field>
          <p className={styles.error}><ErrorMessage name='tipo' /></p>
          <br />
          <label htmlFor='image'>Foto del plato: (formatos en .jpg, .jpeg ó .png)</label>
              <br />
              <input
                className={styles.field}
                type='file'
                id='image'
                name='image'
                accept='image/png, image/jpeg, image/jpg'
                onChange={(event) =>
                setFieldValue('image', event.currentTarget.files?.[0])
                }
              />
              <br />
              <p className={styles.error}><ErrorMessage name='image' /></p>

          <label htmlFor='cantidad'>Cantidad (unidades):</label>
          <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.field} />
          <br />
          <p className={styles.error}><ErrorMessage name='cantidad' /></p>

          <button type='submit' className={styles.send} disabled={!isValid || !dirty }>Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;


