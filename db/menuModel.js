import mongoose from "mongoose";

const menuCollection = "menu";

const menuSchema = new mongoose.Schema({
    type:{
        type: "string",
        required: true
    },
    name: {
        type: "string",
        required: true
    },
    description:{
        type: "string",
        required: true
    },
    price: {
        type: "number",
        required: true
    },
});

export const menu = mongoose.model(menuCollection, menuSchema);