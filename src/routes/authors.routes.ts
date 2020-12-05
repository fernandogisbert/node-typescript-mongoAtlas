import { Router } from 'express';
import { authorController } from '../controllers/authors.controller';


class AuthorRoutes {

    public router: Router = Router();

    constructor(){

        this.router.get('/', authorController.allAuthors);
        this.router.get('/:nombre', authorController.booksAuthor);
        this.router.post('/', authorController.newAuthor)

    }
}

export const authorRoutes = new AuthorRoutes();