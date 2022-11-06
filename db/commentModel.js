import mongoose from 'mongoose';

const commentsCollection = 'comments';

const commentSchema = new mongoose.Schema({
    name: {
        type:'string',
        required: true
    } ,
    email: {
        type: 'string',
        required: true
    },
    comment: {
        type: 'string',
        required: true
    }
})

export const comments = mongoose.model(commentsCollection, commentSchema);