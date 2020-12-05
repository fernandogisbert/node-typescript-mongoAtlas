require('dotenv').config();

import express from 'express';

import { authRoutes } from './routes/auth.routes';
import { authorRoutes } from './routes/authors.routes';
import { bookRoutes } from './routes/book.routes';
import { userRoutes } from './routes/user.routes';


const app = express();

app.set('port', 3000);


app.use(express.json()); 
app.use(express.urlencoded({extended: true}));


app.use('/users', userRoutes.router);
app.use('/books', bookRoutes.router);
app.use('/authors', authorRoutes.router);
app.use('/login', authRoutes.router);


app.listen(app.get('port'),()=>{
    console.log('server is runing on port 3000');
});

