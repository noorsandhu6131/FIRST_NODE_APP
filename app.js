const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Request recieved:${req.method}, ${req.url}`);
    next();
})


app.get("/user/:id",(req, res)  =>{
    const userId = req.params.id; //dot notation
   res.send(`User id is ${userId}`);
})

app.get("/search",(req, res)  =>{
    const query = req.query.q; 
   res.send(`Search query is ${query}`);
})

app.get('/', (req, res)=>{
    res.send("Hello World!");
});




app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});