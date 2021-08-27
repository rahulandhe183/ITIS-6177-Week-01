const express = require('express')
const app = express();
const port = 3000;

app.get('/Home', (req, res)=>{
    res.send('Hello Git');
});

app.listen(port, ()=>{
    console.log('Node.js web server at port 8080');
})