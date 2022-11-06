import { commentService } from "../services/commentsService.js";
const comment = new(commentService);

export const saveComment = async (req,res)=>{
    await comment.createComment(req.body);
    res.json([{comment:'creado'}]);
    console.log(req.body);
}

export const getComments = async (req,res)=>{
    const comments = await comment.getAllComments();
    res.json({comments:comments});
    console.log({comments:comments});
}

export const getComment = async (req,res)=>{
    const id = req.params.id;
    const comment = await comment.getComment(id);
    res.json(comment);
}

export const deleteComment = async (req,res) => {
  const {params:{id}} = req;
  await comment.deleteComment(id);
  res.json([{comment:'comentario borrado'}]);
}

export const updateComment = async (req,res) => {
  const {body, params:{id}} = req;
  const updated = await comment.updateComment(id,body);
  res.json(updated);
}