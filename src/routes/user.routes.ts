import { Router } from 'express';
import { usersController } from '../controllers/user.controller';


class UsersRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.get('/', usersController.allUsers);
        this.router.post('/', usersController.addUser )
        this.router.delete('/', usersController.deleteUser )
        this.router.put('/', usersController.updateUser)

    }
}

export const userRoutes = new UsersRoutes();