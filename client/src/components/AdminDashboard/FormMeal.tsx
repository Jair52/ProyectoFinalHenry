import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import styles from './FormMeal.module.css';
import ValidationSchema from "./ValidationSchema";


// Definir el tipo para los valores del formulario
interface PropsCreateMeal {
  nombre: string;
  origen: string;
  ingredientes: string[];
  carbohidratos: number;
  grasas: number;
  peso: number;
  precio: number;
  tipo: string;
  image: File | null;
  cantidad: number;
}

// Componente del formulario
const IngredientForm: React.FC = () => {
  // Valores iniciales del formulario
  const initialValues: PropsCreateMeal = {
    nombre: '',
    origen: '',
    ingredientes: [''],
    carbohidratos: 0,
    grasas: 0,
    peso: 0,
    precio: 0,
    tipo: '',
    image: null,
    cantidad: 0,
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
      {({ values }) => (
        <Form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <label htmlFor="nombre">Nombre del plato:</label>
          <Field placeholder='Nombre del plato' type='text' name='nombre' className={styles.field} />
          <br />
          <ErrorMessage name='nombre' />
          <br />
          <label htmlFor="origen">País del plato:</label>
          <Field placeholder='País del plato' type='text' name='origen' className={styles.field} />
          <br />
          <ErrorMessage name='origen' />
          <label htmlFor="ingredientes">Ingredientes:</label>
          <FieldArray name="ingredientes">
            {({ push, remove }) => (
              <div>
                {values.ingredientes && values.ingredientes.length > 0 ? (
                  values.ingredientes.map((ingrediente, index) => (
                    <div key={index}>
                      <Field
                        name={`ingredientes.${index}`}
                        placeholder="Ingrese un ingrediente"
                      />
                      <button
                        type="button"
                        onClick={() => remove(index)} // Remover ingrediente
                      >
                        -
                      </button>
                      <ErrorMessage
                        name={`ingredientes.${index}`}
                        component="div"
                        className="field-error"
                      />
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => push('')}>
                    {/* Botón para agregar el primer ingrediente si la lista está vacía */}
                    Agregar Ingrediente
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => push('')} // Agregar un nuevo input para ingrediente
                >
                  + Agregar otro ingrediente
                </button>
              </div>
            )}
          </FieldArray>
          <br />
          <label htmlFor="carbohidratos">Carbohidratos (gr):</label>
          <Field label='Carbohidratos' type='text' name='carbohidratos' className={styles.field} />
          <br />
          <ErrorMessage name='carbohidratos' />
          <br />

          <label htmlFor="grasas">Grasas (gr):</label>
          <Field placeholder='Grasas' type='text' name='grasas' className={styles.field} />
          <br />
          <ErrorMessage name='grasas' />
          <br />

          <label htmlFor="peso">Peso (gr):</label>
          <Field placeholder='Peso' type='text' name='peso' className={styles.field} />
          <br />
          <ErrorMessage name='peso' />
          <br />

          <label htmlFor="precio">Precio (USD):</label>
          <Field placeholder='Precio' type='text' name='precio' className={styles.field} />
          <br />
          <ErrorMessage name='precio' />
          <br />

          <label htmlFor="tipo">Tipo:</label>
          <Field as='select' id='tipo' name='tipo'>
            <option value="">Seleccione un tipo</option>
            <option value="plato fuerte">Plato fuerte</option>
            <option value="vegano">Vegano</option>
            <option value="postre">Postre</option>
          </Field>
          <br />
          <label htmlFor="image">Foto del plato: (formatos en .jpg, .jpeg ó .png)</label>
              <br />
              <input
                className={styles.field}
                type="file"
                id="image"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                // onChange={(event) =>
                // setFieldValue('image', event.currentTarget.files?.[0])
                // }
              />
              <br />
              <ErrorMessage name="profilePicture" />
          <label htmlFor="cantidad">Cantidad (unidades):</label>
          <Field placeholder='Cantidad' type='text' name='cantidad' className={styles.field} />
          <br />
          <ErrorMessage name='cantidad' />

          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
};

export default IngredientForm;
