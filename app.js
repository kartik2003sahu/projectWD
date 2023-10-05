const express = require('express');
const app = express();
const port =80;
const fs = require('fs')

app.use(express.urlencoded())

app.post("/" , ()=>{

    console.log(req.body)


});


app.listen(port, ()=>{

    console.log(`Listening at port ${port}`)

})