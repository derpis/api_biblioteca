const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:3000/Biblioteca", {
useUnifiedTopology: true,
useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema({
titulo: String,
autor: String
}, { collection: 'Libros' });
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;