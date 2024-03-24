// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('InterFoods', 'postgres', 'ravyolo', {
//   host: 'localhost',
//   dialect: 'postgres',
//   // Opciones adicionales de pool aquí si es necesario
// });

// export default sequelize;

import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  database: 'InterFoods',
  dialect: 'postgres',
  username: 'postgres',
  password: 'ravyolo',
  models: [path.join(__dirname, 'models')] // O especifica directamente los modelos
});

export default sequelize;