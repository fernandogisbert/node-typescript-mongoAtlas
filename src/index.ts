require('dotenv').config();


import express from 'express';

import { userRoutes } from './routes/user.routes';


const app = express();

app.set('port', 3000);


app.use(express.json()); 
app.use(express.urlencoded({extended: true}));


app.use('/users', userRoutes.router);

app.listen(app.get('port'),()=>{
    console.log('server is runing on port 3000');
});

