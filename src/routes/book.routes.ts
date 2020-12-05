import { Router } from 'express';
import { bookController } from '../controllers/book.controller';


class BookRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.get('/:title', bookController.findByTitle);
        this.router.get('/', bookController.allBooks);
        this.router.post('/', bookController.addBook )
        this.router.delete('/:title', bookController.deleteBook )
        this.router.put('/:title', bookController.updateBook)

    }
}

export const bookRoutes = new BookRoutes();