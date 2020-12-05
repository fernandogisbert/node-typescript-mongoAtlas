import { Request, Response } from 'express';
const Author = require('../models/authors.model');
import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://ferbert15:${process.env.MATLASSPASS}@cluster0.xz1d7.mongodb.net/${process.env.DDBBNAME}?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology:true})

class AuthorController {

    public async allAuthors(req: Request, res: Response){
        try{
            const allAuthorsList = await Author.find();
            res.json(allAuthorsList);
            console.log(allAuthorsList)
        }catch(err){
            console.log(err)
        }
    }
    public async newAuthor(req: Request, res: Response){
        try{
            const authorToAdd = new Author();

            authorToAdd.nombre = req.body.nombre;
            authorToAdd.apellido= req.body.apellido;
    
            await authorToAdd.save();
            res.json(authorToAdd);
            console.log('author añadido');
        }catch(err){
            console.log(err)
        }
    }
   
}

export const authorController = new AuthorController();