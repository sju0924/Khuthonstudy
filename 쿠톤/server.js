const express=require('express');
const app=express();
var router = express.Router()
var path = require('path')
const fs=require('fs');
const mysql = require('mysql');
var sanitizeHtml = require('./node_modules/sanitize-html');
var bodyParser = require('body-parser');                                                                     
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));




var db = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'KhuTravel2019',
    database:'service'
  });
  
  db.connect();

app.get('/',(req,res)=>{
    fs.readFile('./main.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.get('/inputpage.html',(req,res)=>{
    fs.readFile('./inputpage.html',(err,data)=>{
        if (err)
            throw err;

        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);

        
        
    });
});

app.get('/show',(req,res)=>{  
    res.send('다른 사용자 보기');
    db.query('SELECT * from userinfo', function(err, rows, fields) {  
    db.end();  
        if (!err){  
            res.send(rows);   
            console.log('The solution is: ', rows);  
          }  
          else  
            console.log('Error while performing Query.');  
          });  
    });  


app.post('/submit.html',(req,res)=>{
    fs.readFile('./submit.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });

    var body = req.body;
        var ID = body.ID;
        var email = body.email;
        var gender = body.gender;
        var query = db.query('insert into userinfo (ID, email,gender) values ("' + ID + '","' + email + '","' + gender +'")', function(err, rows) {
        if(err) { throw err;}
            console.log("Data inserted!");
        console.log("이름 : " +  req.body.ID);
        console.log("메일 : " + req.body.email)
    });
    

   
   

});


app.post('/setdes.html',(req,res)=>{
    fs.readFile('./setdes.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });

    var body = req.body;
        var ID = body.ID;
        var des = body.des;
        var dpt = body.dpt;
        var arr = body.arr;
        var query = db.query('insert into destination (ID,destination,dpt,arr) values ("' + ID + '","' + des + '","' + dpt + '","' + arr +'")', function(err, rows) {
        if(err) { throw err;}
            console.log("Data inserted!");
        console.log("이름 : " +  req.body.destination);
        console.log("메일 : " + req.body.arr)
    });

   
   

});


app.listen(3000,()=>{
    console.log('Server is running on port 3000!'); }
);
