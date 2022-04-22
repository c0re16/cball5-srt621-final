const Book = require('../models/book.js');
const books = {
    getBooks: function(req, res) {
        Book.find({}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving Books."
            });
        })
    },
    getBookByID: function(req, res) {
        const id = req.params.id;
        Book.find({_id: id}).then(data => {
            if (!data)
                res.status(404).send({
                    message: "books with id " + id + " is not found."
                });
            else res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving book with id " + id
            })
        })
    },
    getBookByIndex: function(req, res) {
        const id = req.params.id;
        Book.find({index: id}).then(data => {
            if (!data)
                res.status(404).send({
                    message: "books with id " + id + " is not found."
                });
            else res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving book with id " + id
            })
        })
    },
    addBook: function(req, res) {
        if (!req.body.bookname) {
            console.log(req.body)
            res.status(400).send({
                message: "Book name can not be empty!"
            });
            return;
        }

        const product = new Book({
            bookname: req.body.bookname,
            amazon: req.body.amazon,
            author: req.body.author
        })
        product.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating the Product."
            });
        })
    },
    // DELETE delete Product by id
    deleteBook: function(req, res) {
        const id = req.params.id;
        Book.deleteOne({
                _id: id
            })
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: `Failed to delete Product with id=${id}.`
                    });
                } else res.send({
                    message: "Book was deleted successfully."
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error occured while deleting Product with id=" + id
                });
            });
    },
}

module.exports = books;