import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize('postgres://interfood_user:LwlWCns7JcQE47RZurM2j2oEIgO6S1Ou@dpg-co42socf7o1s738nng90-a.oregon-postgres.render.com/interfood', {
  dialect: 'postgres',
  models: [path.join(__dirname, 'models')],
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true
    }
  }
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