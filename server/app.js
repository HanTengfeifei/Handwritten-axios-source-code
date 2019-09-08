const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();

router.get('/', async (cxt,next) => {
    cxt.set('Access-Control-Allow-Origin','*');
    await next();
    cxt.body = "htf Axios-原理分析与简单实现!"
});

app.use(router.routes());
app.listen(9999,() => {
    console.log(`server started on 9999`)
  });