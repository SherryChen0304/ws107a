const router = require('koa-router')()
const HomeController = require('../Project1205/controler/home')
  module.exports = (app) => {
    router.get('/', HomeController.index)

    router.get('/home', HomeController.home)

    router.get('/home/:id/:name', HomeController.HomeParams)

    router.get('/404', async(ctx, next) =>{
        ctx.response.body = '<h1>404 Not Found</h1>'
    })

    router.get('/user', HomeController.login)

    router.post('/user/register', HomeController.register)
 
    app.use(router.routes())
      .use(router.allowedMethods())
  }