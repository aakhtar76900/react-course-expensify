const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname , ".." , "public");


app.use(express.static(publicPath) , () => {
    console.log("Serevr is up. Serving from : " , publicPath);
});

app.get("*" , (req,res) => {
    res.send(path.join(publicPath , "index.html"));
})

app.listen(3000);