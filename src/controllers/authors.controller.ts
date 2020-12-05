import { Request, Response } from 'express';
const Author = require('../models/authors.model');
const Book = require('../models/book.model');

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

    public async booksAuthor(req: Request, res: Response){
        try{
            const allAuthorBooks = await Author.find({nombre:req.params.nombre})
                                    .populate('librosEscritos');
            res.json(allAuthorBooks);
            console.log(allAuthorBooks)
        }catch(err){
            console.log(err)
        }
    }
    public async deleteAuthorId (req: Request, res: Response) {

        try{
            const deleteBook = await Book.findOne({_id: req.body._id});
            if(deleteBook){
                const result = await Book.updateOne(
                    {_id: req.body._id,
                    author: req.params.author},
                    {
                    author: null
                    }
                 )
            }
           res.sendStatus(200)
        }catch (error) {
            res.send(error)
        }
    }
    public async create(req: Request, res: Response){
        try{
            const newRelation = await Book.findOne({title: req.body.title});
            if(newRelation){
                const result = await Book.updateOne({title: req.body.title},
                    {author:req.params.author})
                    res.json(newRelation)
            }else{
                const newBook = new Book();

                newBook.title = req.body.title;
                newBook.author = req.params.author;
                newBook.isbn = req.body.isbn;
                newBook.genre = req.body.genre;
                newBook.price = req.body.price;

                await newBook.save();

                res.json(newBook);
                console.log('libro añadido');
            }
            
        }catch(err){
            console.log(err)
        }
    }
   
}

export const authorController = new AuthorController();