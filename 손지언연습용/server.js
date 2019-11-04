const express=require('express');
const app=express();
const fs=require('fs');
var bodyParser = require('body-parser');                                                                     
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/',(req,res)=>{
    fs.readFile('./main.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.get('/penance.html',(req,res)=>{
    fs.readFile('./penance.html',(err,data)=>{
        if (err)
            throw err;

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.post('/submit.html',(req,res)=>{
    fs.readFile('./submit.html',(err,data)=>{
        if (err)
            throw err;
        console.log(req.body.title);
        
        
    
        

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});

