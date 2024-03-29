const express=require('express');
const app=express();
var router = express.Router()
var path = require('path')
const fs=require('fs');
const mysql = require('mysql');
var sanitizeHtml = require('./node_modules/sanitize-html');
var bodyParser = require('body-parser');    
var template = require('./scripts/template');      
const session=require('express-session');                                                           
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUnintialized:true
}));
const users = [];


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
            var list = template.list_1(result);
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

    app.post('/show/country',(req,res)=>{  

        fs.readFile('./show.html',(err,data)=>{
            if (err)
                 throw err;
            var country = req.body.country;
            db.query("SELECT * from destination where destination =" + " '"+country+"' ", function(error, result, fields) {  
            console.log("SELECT * from destination where destination =" + " '"+country+"' ")  
                if (error){  
                    throw error;
                  }  
                else  
                
                var title = "당신과 같은 목적지의 파트너";
               
                var description = "누구랑 가실래요?";
                var list = template.list_2(result);
                var html = template.HTML(title, list,
                  `<h2>${title}</h2>${description}`,
                  `<a href="/">집가자</a>`
                );
                
                res.send(html);
                   
                //res.writeHead(200);
    
            }); 
        });
       
        });  

        app.post('/show/ID',(req,res)=>{  

            fs.readFile('./show.html',(err,data)=>{
                if (err)
                     throw err;
                var ID = req.body.ID;
                db.query("SELECT * from userinfo where ID =" + " '"  +ID+"' ", function(error, result, fields) {  
                console.log("SELECT * from userinfo where ID =" + " '"  +ID+"' ")  
                    if (error){  
                        throw error;
                      }  
                    else  
                    
                    var title = "ID 검색 결과";
                   
                    var description = "검색하신 이용자의 정보입니다.";
                    var list = template.list_1(result);
                    var html = template.HTML(title, list,
                      `<h2>${title}</h2>${description}`,
                      `<a href="/">집가자</a>`
                    );
                
                    
                    res.send(html+'');
                       
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
        var age = body.age;
        var query1=body._form1;
        var query2=body._form2;
        var query3=body._form3;
        var query4=body._form4;
        var query5=body._form5;
        var query6=body._form6;
        var query7=body._form7;
        var query = db.query('insert into userinfo (ID, email,gender,age,air,sleep,plan,money,transport,meal,prefer) values ("' + ID + '","' + email + '","' + gender + '","' + age+'","' + query1 + '","' + query2 + '","' + query3 + '","' + query4 + '","' + query5 + '","' + query6 + '","'+ query7 +'")', function(err, rows) {
        if(err) { throw err;}
            console.log("Data inserted!");
        console.log("이름 : " +  req.body.ID);
        console.log("메일 : " + req.body.email)
    
            //session
            const userId =req.body.ID;
            const idx_id=users.findIndex((item,idx)=>{
                return item.Id ===userId});
                if (idx_id>-1){
                    res.send('User already exists');    
                }
                else {users.push({Id:userId});
                console.log(users);
        }
    });
});

app.post('/trip_type.html',(req,res)=>{
    fs.readFile('./trip_type.html',(err,data)=>{
        if (err)
            throw err;
        var des = req.body.des;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });

});

 app.get('/trip_type_submit.html',(req,res)=>{
    fs.readFile('./trip_type_submit.html',(err,data)=>{
        if (err)
            throw err;
        res.end(data);
    });
        
        var query1=req.query._form1;
        var query2=req.query._form2;
        var query3=req.query._form3;
        var query4=req.query._form4;
        var query5=req.query._form5;
        var query6=req.query._form6;
        var query7=req.query._form7;
        res.send(query1+query2+query3+query4+query5+query6+query7);
        var query = db.query('insert into userinfo (air,sleep,plan,money,transport,meal,prefer) values ("' + query1 + '","' + query2 + '","' + query3 + '","' + query4 + '","' + query5 + '","' + query6 + '","'+ query7 +'")', function(err, rows) {
            if(err) { throw err;}
                console.log("Data inserted!");
        });
        res.redirect('/show');
 })  
   

app.listen(3000,()=>{
    console.log('Server is running on port 3000!'); }
);
