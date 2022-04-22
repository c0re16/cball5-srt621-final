const mongoose = require('mongoose');
const BodyParser = require("body-parser");
const uri = "mongodb+srv://cball5:4cNnNL3un3eqka@cluster0.qmhkn.mongodb.net/mywebsite?retryWrites=true&w=majority";


const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;// Optional: Configure cors to prevent unauthorised domain to access your resources
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.static('serve_html/views'));
app.use(express.static('serve_html/public/images'));
app.use(express.static('serve_html/public/css'));
app.set('views',__dirname+'/serve_html/views')

console.log('Attempting to load database.');
mongoose.connect(uri,   // refer to the config/dev/db.js file
{ 
    useNewUrlParser: true

}).then(()=> console.log('DB connected successfully.')
).catch(err => console.log('DB connection failed ' + err)
);
console.log('Attempting to load routes.');



//app.use('/', (req, res) => res.send('Hello World'));// Any url that doesn't match will return as a 404

app.use('/', require('./serve_html/routes'));
app.use(function(req, res, next) {

    res.status(404).sendfile('serve_html/views/notfound.html');

});
const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));
