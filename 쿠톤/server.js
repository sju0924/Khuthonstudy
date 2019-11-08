const express=require('express');
const app=express();
var router = express.Router()
var path = require('path')
const fs=require('fs');
const mysql = require('mysql');
var sanitizeHtml = require('./node_modules/sanitize-html');
var bodyParser = require('body-parser');    
var template = require('./scripts/template');                                                                 
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

    fs.readFile('./show.html',(err,data)=>{
        if (err)
             throw err;

        db.query('SELECT * from userinfo', function(error, result, fields) {  
            
            if (error){  
                throw error;
              }  
            else  
            
            var title = "추천 파트너";
           
            var description = "누구랑 가실래요?";
            var list = template.list(result);
            var html = template.HTML(title, list,
              `<h2>${title}</h2>${description}`,
              `<a href="/">집가자</a>`
            );
            console.log("읽음")
            
            res.send(html);
               
            //res.writeHead(200);

        }); 
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
        var des = req.body.des;
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
