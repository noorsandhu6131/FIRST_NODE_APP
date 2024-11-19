const express = require('express');
const router = express.Router();




router.get('/', (req, res)=>{
    res.send("Hello World!");
});

router.get('/about', (req, res)=>{
    res.send("This is about page!");
});

router.get("/user/:id",(req, res)  =>{
    const userId = req.params.id; //dot notation
   res.send(`User id is ${userId}`);
})

router.get("/search",(req, res)  =>{
    const query = req.query.q; 
   res.send(`Search query is ${query}`);
});


module.exports = router;
