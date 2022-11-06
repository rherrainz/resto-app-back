import {menu} from "../db/menuModel.js";

export const menuService = class{
    async createMenu(menuItem){
        await menu.create(menuItem);
    }
    async getAllMenu(){
        const allMenu = await menu.find();
        return allMenu;
    }
    async deleteMenu(id){
        await menu.findByIdAndDelete(id);
    }
    async updateMenu(id,updatedMenu){
        const updated = await menu.findByIdAndUpdate(id,updatedMenu);
        return updated;
    }
    async getMenu(id){
        const menuItem = await menu.findById(id);
        return menuItem;
    }

}