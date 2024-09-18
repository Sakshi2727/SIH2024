const express=require("express")
const app=express()
const path = require('path');
app.use(express.json());

const cors=require("cors")
app.use(express.static("uploads"))
app.use(cors({
    origin: 'http://localhost:5173',  // Allow your frontend URL
    methods: 'GET,POST',  // Specify allowed methods
  }));
const router=require("./routes/bookroute")
require("./connection/conn")

app.use("/api/v1",router)
app.listen(1000,()=>{
    console.log("Successfull")
})