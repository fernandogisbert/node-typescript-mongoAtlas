
import mongoose, { Schema } from 'mongoose';

// para utilizar squemas de mongoose
const AuthorsSchema = mongoose.Schema;

// defino el esquema de mi entidad. String , Number, son clases de mongoose no tipos de datos
const authorsSchema = new AuthorsSchema({
    
    nombre: String,
    apellido: String,
    librosEscritos:[{type: Schema.Types.ObjectId, ref: "Book"}]

});

module.exports = mongoose.model('Author', authorsSchema);