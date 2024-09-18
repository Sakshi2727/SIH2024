require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });



// mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Database connected'))
//   .catch(err => console.error('Database connection error:', err));