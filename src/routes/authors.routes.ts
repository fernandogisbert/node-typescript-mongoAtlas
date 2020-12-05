import { Router } from 'express';
import { authorController } from '../controllers/authors.controller';


class AuthorRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', authorController.allAuthors);
        this.router.get('/:nombre', authorController.booksAuthor);
        this.router.put('/books/:author', authorController.deleteAuthorId);
        this.router.post('/books/:author', authorController.create);


    }
}

export const authorRoutes = new AuthorRoutes();