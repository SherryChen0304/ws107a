const V = require('./03-view')
const M = require('./01-model')
const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')
const Koa = require('koa')
const app = (module.exports = new Koa())

app.use(logger())
app.use(koaBody())

router
  .get('/', home)
  .get('/login', showLogin)
  .post('/login', login)
  .get('/users', listUsers)
  .get('/:user/posts', userPosts)
  .get('/:user/post/new', addPost)
  .get('/:user/post/:id', showPost)
  .get('/:user/post/edit/:id', editPost)
  .get('/:user/post/delete/:id', removePost)
  .post('/:user/post/modify/:id', modifyPost)
  .post('/:user/post', createPost)

app.use(router.routes())

async function home (ctx) {
  ctx.redirect('/login')
}

async function showLogin (ctx) {
  ctx.body = V.showLogin()
}

async function login (ctx) {
  const passport = ctx.request.body
  if (M.login(passport.user, passport.password)) {
    
    ctx.redirect(`/${passport.user}/posts`)
  } else {
    ctx.status = 401
    ctx.body = '登入失敗'
  }
}

async function listUsers (ctx) {
  const users = M.listUsers()
  ctx.body = await V.listUsers(users)
}

async function userPosts (ctx) {
  const user = ctx.params.user
  const posts = M.listPosts(user)
  ctx.body = await V.listPosts(user, posts)
}

async function addPost (ctx) {
  const user = ctx.params.user
  ctx.body = await V.newPost(user)
}

async function showPost (ctx) {
  const user = ctx.params.user
  const post = M.getPost(user, ctx.params.id)
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.body = await V.showPost(user, post)
}

async function editPost (ctx) {
  const user = ctx.params.user
  const post = M.getPost(user, ctx.params.id) // M.editPost(user, ctx.params.id)
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.body = await V.editPost(user, post)
}

async function removePost (ctx) {
  const user = ctx.params.user
  const post = M.removePost(user, ctx.params.id)
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.redirect(`/${user}/posts`)
}

async function modifyPost (ctx) {
  const user = ctx.params.user
  const post = ctx.request.body
  post.id = ctx.params.id
  console.log('modifyPost: ', user, " post=", post)
  M.modifyPost(user, post)
  ctx.redirect(`/${user}/posts`)
}

async function createPost (ctx) {
  const user = ctx.params.user
  const post = ctx.request.body
  M.addPost(user, post)
  ctx.redirect(`/${user}/posts`)
}

if (!module.parent) {
  app.listen(3000)
  console.log('Server run at http://localhost:3000')
}
