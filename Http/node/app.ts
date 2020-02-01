import * as koa from 'koa'
const App = new koa()
App.use(async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept Authorization,Content-Type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
    });
    next()
})
App.use(async (ctx) => {
     ctx.body =await  'hello fetch'
})
App.listen(3000, () => {
    console.log('http://localhost:3000')
})

