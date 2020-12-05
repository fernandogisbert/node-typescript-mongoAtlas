import { Request, Response } from 'express';
const User = require('../models/user.model');
import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://ferbert15:${process.env.MATLASSPASS}@cluster0.xz1d7.mongodb.net/${process.env.DDBBNAME}?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology:true})

class UsersController {
    public async allUsers(req: Request, res: Response){
        try{
            const allUsersList = await User.find();
            res.json(allUsersList);
            // console.log(allUsersList)
        }catch(err){
            console.log(err)
        }
      
    }
    // este método combina la collection autores con un array de libros que ha comprado
    public async userBooks(req: Request, res: Response){
        try{
            const userBooks = await User.findOne({nombre:req.params.nombre})
                                    .populate('books');
            res.json(userBooks);
            console.log(userBooks)
        }catch(err){
            console.log(err)
        }
    }
    public async addUser(req: Request, res: Response){
        try{
            const userToAdd = new User();

            userToAdd.nombre = req.body.nombre;
            userToAdd.apellidos= req.body.apellidos;
            userToAdd.email= req.body.email;
            userToAdd.password= req.body.password;
            userToAdd.roleId= req.body.roleId;
    
            await userToAdd.save();
            res.json(userToAdd);
            console.log('usuario añadido');
        }catch(err){
            console.log(err)
        }

    }
    public async deleteUser(req: Request, res: Response){
        try{
            await User.deleteOne({nombre:req.body.nombre});

            res.send('usuario eliminado');
        }catch(err){
            console.log(err)
        }

    }
    public async updateUser(req: Request, res: Response){
        try{
            await User.updateOne({nombre:req.body.nombre},
                {nombre: req.body.nuevonombre});
            res.send('usuario actualizado');
            console.log('usuario actualizado');
        }catch(err){
            console.log(err)
        }
    }
}

export const usersController = new UsersController();