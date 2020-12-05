import { Router } from 'express';
import { usersController } from '../controllers/user.controller';
import { checkJwt } from '../middlewares/check.Jwt';



class UsersRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.get('/',[checkJwt('Admin') ], usersController.allUsers);
        // En lugar de crear la tabla de ventas he creado esta ruta muestra cada usuario con los libros que ha comprado
        this.router.get('/:nombre', usersController.userBooks);
        this.router.post('/', usersController.addUser )
        this.router.delete('/', usersController.deleteUser )
        this.router.put('/', usersController.updateUser)

    }
}

export const userRoutes = new UsersRoutes();