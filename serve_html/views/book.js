const mongoose = require('mongoose');
const Schema = mongoose.Schema;
schema = new Schema({
    bookname: String,
    amazon: String
},
{
    collection: 'web'
});
const model = mongoose.model('web', schema);
const Models = { model: model };
module.exports = Models;