const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'Servidor funcionando 🎉';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORTA || 3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
