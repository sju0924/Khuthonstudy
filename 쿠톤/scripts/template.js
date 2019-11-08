module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
    <style>
      <title>사용자 목록 - ${title}</title>
      <meta charset="utf-8">

      body{
        background-color : #112b8d; 
        border : 4px solid #d4af37;
    }

    #submit{width:60px;
      background-color: #f8585b;
      border: none;
      color:#fff;
      padding: 6px 0;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
      cursor: pointer;
      border-radius:10px 10px 10px 10px;
      margin: 0px 0px; 
      top:50%; 
      left:50%;}

      #title{font-style : italic; 
        font-weight : bold; 
        font-size : 5em; 
        line-height : 1.0em; 
        text-align : center;
        color : white;
        margin : 150px;

      p{
        color : white;
        font-style: italic;
        font-size:2em;
      }
</style>


    </head>
    <body>
      <h1 id="title"><a href="/">여행메이트 찾기</a></h1>
      ${control}
      ${body}
      <form action = "/show/ID" method = "POST">
          <p>ID로 검색하기<input type = "text" name = ID></p>
          <input type = "submit" id="submit value="검색">
      </form>

      <form action = "/show/country" method = "POST">
          <p>국가로 검색하기<input type = "text" name = country></p>
          <input type = "submit" id="submit value="검색">
      </form>

      <form action = "/show/style" method = "POST">
          <p>취향으로 검색하기<input type = "text" name = style></p>
          <input type = "submit" id="submit value="검색"></p>
      </form>
      ${list}

      <p><a href = "/">돌아가러 가기</a></p>

      
      
    </body>
    </html>
    `;
  },list_1:function(user){
    var list = '<ul>';
    var i = 0;
    while(i < user.length){
      list = list + `<li>${"사용자 : "+ user[i].ID+"  "+"  성별 : "+ user[i].gender+"  나이 : "+user[i].age+"  연락처 : "+ user[i].email}</li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },list_2:function(user){
    var list = '<ul>';
    var i = 0;
    while(i < user.length){
      list = list + `<li>${"사용자 : "+ user[i].ID+"  "+"  목적지 : "+ user[i].destination+"  출발일 : "+user[i].dpt+"  돌아오는 날 : "+ user[i].arr}</li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
