const mongoose = require('mongoose');
const BodyParser = require("body-parser");
const uri = "mongodb+srv://cball5:4cNnNL3un3eqka@cluster0.qmhkn.mongodb.net/mywebsite?retryWrites=true&w=majority";


const express = require('express');
const bodyParser = require('body-parser');
// 
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function() {res.sendfile("views/index.html")})
app.get('/home',function() {res.sendfile("views/index.html")})
app.use(express.static('serve_html/views'));
app.use(express.static('serve_html/public/images'));
app.use(express.static('serve_html/public/css'));
app.set('views',__dirname+'/serve_html/views')

console.log('Attempting to load database.');
mongoose.connect(uri, 
{ 
    useNewUrlParser: true

}).then(()=> console.log('DB connected successfully.')
).catch(err => console.log('DB connection failed ' + err)
);
console.log('Attempting to load routes.');


app.use('/', require('./serve_html/routes'));
app.use(function(req, res, next) {

    res.status(404).sendfile('serve_html/views/notfound.html');

});

const port = 3000;
const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));
