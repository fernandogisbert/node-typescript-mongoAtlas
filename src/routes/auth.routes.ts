import { Router } from 'express';
import { authController } from '../controllers/auth.controller';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        
        this.router.post('/auth', authController.auth);
    }
}

export const authRoutes = new AuthRoutes();