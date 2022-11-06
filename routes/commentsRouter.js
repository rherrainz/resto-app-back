import Router from 'express';
import { saveComment,getComments,deleteComment, updateComment,getComment } from '../controller/commentsController.js';

export const commentsRouter =Router();

commentsRouter.get('/', getComments);
commentsRouter.get('/:id', getComment);
commentsRouter.post('/', saveComment);
commentsRouter.delete('/delete/:id',deleteComment);
commentsRouter.put('/update/:id',updateComment);