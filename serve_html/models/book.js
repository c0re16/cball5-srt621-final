const mongoose = require('mongoose');
const Schema = mongoose.Schema;
console.log('models/books.js loaded')
productSchema = new Schema({
    bookname: String,
    amazon: String,
    index: String,
    author: String
},
{
    collection: 'web'
});
const Books = mongoose.model('web', productSchema);
const Models = { Books: Books };
module.exports = Books;