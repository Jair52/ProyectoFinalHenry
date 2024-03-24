import sequelize from './sequelize';
import { Plato } from './Plato';

async function main() {
  await sequelize.sync({ force: true }); // Precaución con force: true, ya que borrará las tablas existentes
  await Plato.create({
    nombre: 'Asado con Ensalada Criolla',
      origen: 'Argentina',
      ingredientes: ['Carne de res', 'Chorizo', 'Morcilla'],
      kilocalorias: 1200,
      carbohidratos: 0,
      grasas: 80,
      peso: 450,
      precio: 15.0,
      tipo: 'plato fuerte',
      imagen: 'https://link.to/image.jpg',
  });
  console.log('Plato creado exitosamente');
}

main().catch((error) => {
  console.error('Error:', error);
});