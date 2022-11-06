import { comments } from "../db/commentModel.js";

export const commentService = class{
    async createComment(comment){
        await comments.create(comment);
    }
    async getAllComments(){
        const allComments = await comments.find();
        return allComments;
    }
    async deleteComment(id){
        await comments.findByIdAndDelete(id);
    }
    async updateComment(id,updatedComment){
        const updated = await comments.findByIdAndUpdate(id,updatedComment);
        return updated;
    }
    async getComment(id){
        const comment = await comments.findById(id);
        return comment;
    }

}