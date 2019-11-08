module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>사용자 목록 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">여행메이트 찾기</a></h1>
      ${control}
      ${body}
      ${list}

      <p><a href = "/">돌아가러 가기</a></p>

      <form action = "show/ID" method = "POST">
          <p>ID로 검색하기<input type = "text" name = ID></p>
          <input type = "submit">
      </form>

      <form action = "show/country" method = "POST">
          <p>국가로 검색하기<input type = "text" name = country></p>
          <input type = "submit">
      </form>

      <form action = "show/style" method = "POST">
          <p>취향으로 검색하기<input type = "text" name = style></p>
          <input type = "submit"></p>
      </form>
      
    </body>
    </html>
    `;
  },list:function(user){
    var list = '<ul>';
    var i = 0;
    while(i < user.length){
      list = list + `<li>${"사용자 : "+ user[i].ID+"  "+"  성별 : "+ user[i].gender+"  나이 : "+user[i].age+"  연락처 : "+ user[i].email}</li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
