var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    cargo: {type: String, required: true},
    genero: {type: String, required: true, max:2},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empleado', UsuarioSchema);
