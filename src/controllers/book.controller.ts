import { Request, Response } from 'express';
const Book = require('../models/book.model');
import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://ferbert15:${process.env.MATLASSPASS}@cluster0.xz1d7.mongodb.net/${process.env.DDBBNAME}?retryWrites=true&w=majority`,{useNewUrlParser:true, useUnifiedTopology:true})

class BookController {
    public async findByTitle(req: Request, res: Response){
        try{
            const bookByTitle = await Book.findOne({title:req.params.title});
            res.json(bookByTitle);
            console.log(bookByTitle)
        }catch(err){
            console.log(err)
        }
      
    }
    public async allBooks(req: Request, res: Response){
        try{
            const bookByTitle = await Book.find();
            res.json(bookByTitle);
            console.log(bookByTitle)
        }catch(err){
            console.log(err)
        }
      
    }
    public async addBook(req: Request, res: Response){
        try{
            const bookToAdd = new Book();

            bookToAdd.title = req.body.title;
            bookToAdd.author= req.body.author;
            bookToAdd.isbn= req.body.isbn;
            bookToAdd.genre= req.body.genre;
            bookToAdd.price= req.body.price;
    
            await bookToAdd.save();
            res.json(bookToAdd);
            console.log('libro añadido');
        }catch(err){
            console.log(err)
        }

    }
    public async deleteBook(req: Request, res: Response){
        try{
            await Book.deleteOne({title:req.params.title});

            res.send('libro eliminado');
        }catch(err){
            console.log(err)
        }

    }
    public async updateBook(req: Request, res: Response){
        try{
            await Book.updateOne({title:req.params.title},
                {isbn:req.body.isbn,
                 price:req.body.price,
                 genre:req.body.genre});
            res.send('libro actualizado');
            console.log('libro actualizado');
        }catch(err){
            console.log(err)
        }
    }
}

export const bookController = new BookController();