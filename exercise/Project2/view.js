var V = module.exports = {}

V.layout = function (title, content) {
  return `
  <html>
  <head>
    <meta charset="utf-8"> 
    <title>${title}</title>
    <style>
      body {
        padding: 20px;
        font: 16px Helvetica, Arial;
      }
  
      h1 {
        font-size: 2em;
        color: #222222;
      }
  
      h2 {
        font-size: 1.4em;
        color: #666666;
      }
      
      h3 {
        font-size: 1.2em;
        color: #888888;
      }
  
      #posts {
        margin: 0;
        padding: 0;
      }
  
      #posts li {
        margin: 40px 0;
        padding: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
        list-style: none;
      }
  
      #posts li:last-child {
        border-bottom: none;
      }
  
      textarea {
        width: 500px;
        height: 300px;
      }
  
      input,
      textarea {
        border: 1px solid #eee;
        border-top-color: #ddd;
        border-left-color: #ddd;
        border-radius: 2px;
        padding: 15px;
        font-size: .8em;
      }
  
      input[type=text] {
        /*width: 500px;*/
      }

      a, a:visited {
        color: #336699;
        text-decoration: none;
      }

      li { line-height: 160%; }
    </style>
  </head>
  <body>
    <div><img src="header.png" width="784" height="73" style="display:block; margin:0"></div>
    <section id="content">
      ${content}
    </section>
  </body>
  </html>
  `
}

V.list = function (posts) {
  let list = []
  let count = 0
  for (let post of posts) {
    if (post == null) continue
    list.push(`
    <li>
      <h2>${post.title}</h2>
      <p><a href="/post/${post.id}">讀取貼文</a></p>
    </li>
    `)
    count ++
  }
  
  let content = `
  <h1>貼文列表</h1>
  <p>您總共有 <strong>${count}</strong> 則貼文!</p>
  <p><a href="/post/new">創建新貼文</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return V.layout('貼文列表', content)
}

V.new = function () {
  return V.layout('新增貼文', `
  <h1>新增貼文</h1>
  <p>創建一則新貼文</p>
  <form action="/post" method="post">
    <p><input type="text" placeholder="Title" name="title"></p>
    <p><textarea placeholder="Contents" name="body"></textarea></p>
    <p><input type="submit" value="Create"></p>
  </form>
  `)
}

V.show = function (post) {
  return V.layout(post.title, `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    <a href ="/edit/${post.id}">編輯</a>
    <a href ="/delete/${post.id}">刪除</a>
  `)
}

V.edit = function (post) {
  return V.layout(post.title, `
    <form action="/modify/${post.id}" method="post">
    <p><input type="text" placeholder="Title" name="title" value ="${post.title}"></p>
    <p><textarea placeholder="Contents" name="body">${post.body}</textarea></p>
    <p><input type="submit" value="儲存"></p>
  </form>
  `)
}