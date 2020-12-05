import mongoose from 'mongoose';


// para utilizar squemas de mongoose
const Schema = mongoose.Schema;

// defino el esquema de mi entidad. String , Number, son clases de mongoose no tipos de datos
const UserSchema = new Schema({
    
    nombre: String,
    apellidos: String,
    email: String,
    password: String,
    rol: String,
    books:[{type: Schema.Types.ObjectId, ref: "Book"}]
});

module.exports = mongoose.model('User', UserSchema);
