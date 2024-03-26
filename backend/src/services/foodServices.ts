import { Plato } from '../Plato'; // Asegúrate de que la ruta al modelo Plato sea correcta
// import { FoodEntry } from '../types';
export const getEntries = async () => {
    return await Plato.findAll();
};

export const findById = async (id: number) => {
    return await Plato.findByPk(id, {
        attributes: { exclude: ['campoSensible1', 'campoSensible2'] } // Excluye los campos sensibles si los hay
    });
};

export const getEntriesWithoutSensitiveInfo = async () => {
    return await Plato.findAll({
        attributes: ['id', 'nombre', 'origen', 'ingredientes', 'kilocalorias', 'carbohidratos', 'grasas', 'peso', 'precio', 'tipo', 'imagen']
    });
};



