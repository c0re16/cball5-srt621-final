const express = require('express');
const router = new express.Router();
const Books = require('../controllers/book.js');
console.log('loaded controllers/index.js');
router.get('/', function (req,res) {
	res.sendfile('./serve_html/views/home.html');
});
router.get('/api/books', [Books.getBooks]);
router.get('/api/books/:id', [Books.getBookByID]);
router.get('/api/book/:id', [Books.getBookByIndex]);

router.post('/api/books/', [Books.addBook]);
router.delete('/api/books/:id', [Books.deleteBook]);



router.get('/books/:id', function(req,res) {
	var data = req.params.id;
	res.render("bookByIndex.ejs",{id:data})
})
router.get('/book/:id', function(req,res) {
	var data = req.params.id;
	res.render("bookByID.ejs",{id:data})
})

router.get('/addNewBook', function(req,res) {
	var data = req.params.id;
	res.render("addNewBook.ejs",{id:data})
})
router.get('/DeleteABook', function(req,res) {

	res.render("deleteABook.ejs")
})
module.exports = router;