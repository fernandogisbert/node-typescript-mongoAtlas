import { Request, Response, NextFunction  } from 'express';
import jwt from 'jsonwebtoken';
const User = require('../models/user.model');


export const checkJwt =  (roleToCheck: string) => {
    return async (req:Request, res: Response, next: NextFunction) => {
        const token = <string> req.headers["authorization"];

        try {
            // devuelve el objeto del token
           
                let decoded = jwt.verify(token,"@Neo20");
                let data = JSON.stringify(decoded);
                let data2 = JSON.parse(data);
            
                const admin = await User.find({nombre:data2.nombre});
                
                console.log(admin);
               
    
            if(admin[0].rol != roleToCheck){

                throw new Error("Dont have permmissions")
            }
        
        } catch (error) {

            res.sendStatus(401);
        }
        next();
    }
}

