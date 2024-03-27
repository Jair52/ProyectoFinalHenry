import React from 'react'
import * as Yup from 'yup';

  // Validación del formulario con Yup
  const ValidationSchema = Yup.object({
    ingredientes: Yup.array()
      .of(Yup.string().required('Un ingrediente es requerido'))
      .required('Debes ingresar al menos un ingrediente'),
  });


export default ValidationSchema