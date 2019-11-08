module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${control}
      ${body}
      ${list}
      
    </body>
    </html>
    `;
  },list:function(user){
    var list = '<ul>';
    var i = 0;
    while(i < user.length){
      list = list + `<li>${user[i].ID}</li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
