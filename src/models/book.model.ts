
import mongoose, { Schema } from 'mongoose';

// para utilizar squemas de mongoose
const BooksSchema = mongoose.Schema;

// defino el esquema de mi entidad. String , Number, son clases de mongoose no tipos de datos
const BookSchema = new BooksSchema({
    
    title: String,
    author:{type: Schema.Types.ObjectId, ref: "Author"},
    isbn: String,
    genre: String,
    price: Number,
});

module.exports = mongoose.model('Book', BookSchema);