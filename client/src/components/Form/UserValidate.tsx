import * as Yup from 'yup';


const validateUser = Yup.object().shape({
  firstName: Yup.string().required('Nombre es requerido'),
  lastName: Yup.string().required('Apellido es requerido'),
  email: Yup.string().email('Debe ser un correo electrónico')
  .required('Email es requerido')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Correo electrónico inválido'
  ),
  password: Yup.string().required('Contraseña es requerido')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número'
    ),
    confirmPassword: Yup.string().required('Confirmar contraseña es requerida')
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
  profilePicture: Yup.mixed()
    .nullable()
    .test('fileFormat', 
      'Unsupported file format', 
      (value) => {
      if (!value) return true;
      const file = value as File;
      const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      return supportedFormats.includes(file.type);
    }),
});

export default validateUser;