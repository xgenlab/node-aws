const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("welcome to the home page");
})

app.listen('3000', ()=>{
    console.log('app start to work at port 3000');
});