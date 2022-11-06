import Router from 'express';
import { saveMenuItem,getMenuItem,deleteMenuItem, updateMenuItem,getMenu } from '../controller/MenuController.js';

export const menuRouter = Router();

menuRouter.get('/', getMenu);
menuRouter.get('/:id', getMenuItem);
menuRouter.post('/', saveMenuItem);
menuRouter.delete('/delete/:id',deleteMenuItem);
menuRouter.put('/update/:id',updateMenuItem);