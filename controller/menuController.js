import { menuService } from "../services/menuService.js";
const menu = new(menuService);

export const saveMenuItem = async (req,res)=>{
    await menu.createMenu(req.body);
    res.json([{menu:'creado'}]);
    console.log(req.body);
}

export const getMenu = async (req,res)=>{
    const allMenu = await menu.getAllMenu();
    res.json({allMenu:allMenu});
    console.log({allMenu:allMenu});
}

export const getMenuItem = async (req,res)=>{
    const id = req.params.id;
    const item = await menu.getMenu(id);
    res.json(item);
}

export const deleteMenuItem = async (req,res) => {
  const {params:{id}} = req;
  await menu.deleteMenu(id);
  res.json([{menu:'menu borrado'}]);
}

export const updateMenuItem = async (req,res) => {
  const {body, params:{id}} = req;
  const updated = await menu.updateMenu(id,body);
  res.json(updated);
}