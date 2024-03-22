// import { Request, Response } from 'express';
// import axios from 'axios';
// import * as foodServices from '../services/foodServices';

// export const putFood = async(req: Request, res: Response) => {
//     try {
//         const foodIdToUpdate = foodServices.findById(Number(req.params.id)); 
//         const updatedFoodData = req.body.updatedData; 

//         const response = await updateFood(foodIdToUpdate, updatedFoodData);

//         res.send(response);
//     } catch (error) {
//         res.status(500).json({ error: 'Error making PUT request.' });
//     }
// }

// const updateFood = async (foodIdToUpdate: number, updatedFoodData: any) => {
//     try {
//         const response = await axios.put(`/foods/${foodIdToUpdate}`, updatedFoodData);
//         return response.data; 
//     } catch (error) {
//         throw new Error('Error al actualizar el alimento.'); 
//     }
// }
