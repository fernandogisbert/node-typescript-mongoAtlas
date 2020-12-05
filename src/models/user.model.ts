import mongoose from 'mongoose';

// para utilizar squemas de mongoose
const UsersSchema = mongoose.Schema;

// defino el esquema de mi entidad. String , Number, son clases de mongoose no tipos de datos
const UserSchema = new UsersSchema({
    
    nombre: String,
    apellidos: String,
    email: String,
    password: String,
    rol: String
});

module.exports = mongoose.model('User', UserSchema);
