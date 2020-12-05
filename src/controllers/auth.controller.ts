import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const User = require('../models/user.model');

 
class AuthController {

    public async auth (req: Request, res: Response) {      
        try{

            const findUser = await User.findOne(
                {
                    nombre: req.body.nombre,
                    apellidos: req.body.apellidos,
                }
               
            )
            if(findUser){
                const token = jwt.sign(
                    {
                        nombre: req.body.nombre,
                        password: req.body.password,
                
                    },
                    "@Neo20",
                    {
                    expiresIn: '1h'
                    }
                ); 
                res.send(token); 
            }else{
                res.json('Error: 404. User not found.')
            } 
           
        }catch (error) {

                res.send(error)
        }
    }
}

export const authController = new AuthController();
