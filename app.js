

/*
Code lab: Basic Routing
Date created 2024-11-18
Created by Harnoor Kaur Sandhu
*/
const express = require('express');
const app = express();
const PORT = 3000;
const router = require("./routes/pages")

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Request recieved:${req.method}, ${req.url}`);
    next();
})


app.use(router);



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});