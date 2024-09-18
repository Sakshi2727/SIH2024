const router=require("express").Router()
const express = require('express');
const multer = require("multer")

const fs = require('fs')
const cors = require('cors');
const path = require('path');
const app = express();


// Configure CORS
app.use(cors());
app.use(express.static("uploads"))



app.use(express.json());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    },
})
// Middleware (function or array of functions): Middleware functions that will be executed before the final route handler. These functions can perform operations such as authentication, logging, and validation. Middleware can be optional, and you can pass one or more middleware functions.
var upload = multer({
    storage: storage,
}).single("image")

const bookmodel=require("../models/bookmodel")

// router.post('/add', upload, async (req, res) => {
//     try {
//         console.log('Received data:', req.body);
//         const { bookname, author, description, price } = req.body;
//         const image = req.file ? req.file.path : null; // Handle file path

//         const newBook = new bookmodel({
//             bookname,
//             author,
//             description,
//             price,
//             image
//         });

//         await newBook.save();
//         console.log('Success response being sent');
//         res.status(200).json({ message: 'Book added successfully' });
//     } catch (error) {
//         console.error('Error while adding book:', error);
//         res.status(500).json({ message: 'Error adding book', error: error.message });
//     }
// });
    router.post("/add",upload,async (req, res) => {
        try {
            console.log("Received data:", req.body);  // Log the request body
            const data = req.body;
            const newBook = new bookmodel(data);
            await newBook.save();
            console.log("Success response being sent");
            res.status(200).json({ message: "Book added to sell successfullt.You can update the price if you want and also delete the book from selling whenever needed." });
        } catch (error) {
            console.error("Error while adding book:", error);
            res.status(500).json({ message: "Error adding book", error: error.message });
        }
    });
    // get all books 
    router.get("/getbooks", async (req, res) => {
        let books;
        try {
            books=await bookmodel.find();
            res.status(200).json({ books });
        } catch (error) {
            console.error("Error while adding book:", error);
            res.status(500).json({ message: "Error adding book", error: error.message });
        }
    });

    // router.get("/getbooks", async (req, res) => {
    //     try {
    //         let books = await bookmodel.find();
    // // console.log(books)
    //         // Adjust the image path for each book
    //         books = books.map(book => {
    //             return {
    //                 ...book._doc,  // Get the plain object representation of the book document
    //                 image: book.image.replace(/\\/g, '/')  // Replace backslashes with forward slashes
    //             };
    //         });
    
    //         res.status(200).json({ books });
    //     } catch (error) {
    //         console.error("Error while fetching books:", error);
    //         res.status(500).json({ message: "Error fetching books", error: error.message });
    //     }
    // });

    
    //  get books by id  req.params:
// Purpose: req.params is used to retrieve route parameters from the URL. This is typically used with GET requests when parts of the URL represent dynamic data, such as an ID or a username.
    // router.get("/getbooks/:id", async (req, res) => {
    //     let book;
    //     const id=req.params.id
    //     try {
    //         book=await bookmodel.findById(id);
    //         res.status(200).json({ book });
    //     } catch (error) {
    //         console.error("Error while adding book:", error);
    //         res.status(500).json({ message: "Error adding book", error: error.message });
    //     }
    // });
    // update book 
    router.put("/updatebook/:id", async (req, res) => {
        const id=req.params.id
        const {bookname,description,author,image,price}=req.body;
        let book;
        try {
            book=await bookmodel.findByIdAndUpdate(id,{
                bookname,
                description,
                author,
                image,
                price
            });
        book=await book.save().then(()=> res.send(200).json({message:"data updated"}));
        
        } catch (error) {
            console.error("Error while adding book:", error);

        }
    });
    router.delete("/deletebook/:id", async (req, res) => {
        const id = req.params.id;
        try {
            await bookmodel.findByIdAndDelete(id);
            res.status(200).json({ message: "Book deleted successfully" });
        } catch (error) {
            console.error("Error while deleting book:", error);
            res.status(500).json({ message: "Error deleting book", error: error.message });
        }
    });

    
module.exports=router