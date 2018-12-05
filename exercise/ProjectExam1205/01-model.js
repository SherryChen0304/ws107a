const M = module.exports = {}

const db = {
  profile: {
    girl: { password: '123'},
    boy: { password: '456'}
  },
  users: {
    girl: {
      posts: [
        {id: 0, title: 'G1', body: 'hello'},
        {id: 1, title: 'G2', body: 'My name judy.'},
        {id: 2, title: 'G3', body: 'I am 9 years old.'}
      ]
    },
    boy: {
      posts: [
        {id: 0, title: 'B1', body: 'hello'},
        {id: 1, title: 'B2', body: 'My name jack.'},
        {id: 2, title: 'B3', body: 'I am 12 years old.'},
      ]
    }
  }
}

M.listUsers = function () {
  return db.users
}
//登入
M.login = function (user, password) {
  const profile = db.profile[user]
  return (profile.password === password)
}
//原本貼文
M.userPosts = function (user) {
  const userTable = db.users[user] || {}
  const posts = userTable.posts
  if (posts == null) throw Error('M.userPosts: fail!')
  return posts
}

M.addPost = function (user, post) {
  const posts = M.userPosts(user)
  const id = posts.push(post) - 1
  post.created_at = new Date()
  post.id = id
}

M.getPost = function (user, id) {
  const posts = M.userPosts(user)
  return posts[id]
}

M.listPosts = function (user) {
  const posts = M.userPosts(user)
  return posts
}
//修改
M.modifyPost = function(user, post){
  console.log('modifyPost: ', JSON.stringify(db))
  const posts = M.userPosts(user)
  posts[post.id] = post
  console.log('modifyPost: ', JSON.stringify(db))
  return posts
}
//刪除
M.removePost = function(user, id){
  const userTable = db.users[user] || {}
  const posts = userTable.posts
  let post = posts[id]
  delete posts[id] 
  //posts[id] = null
  return post
}
