import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  database: 'InterFoods',
  dialect: 'postgres',
  username: 'postgres',
  password: 'ravyolo',
  models: [path.join(__dirname, 'models')] // O especifica directamente los modelos
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar con la base de datos:', error);
  }
}

main();


export default sequelize;