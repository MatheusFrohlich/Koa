module.exports = async (ctx, next) => {
  const token = ctx.headers['authorization'];

  if (token !== 'Bearer meutoken123') {
    ctx.status = 401;
    ctx.body = { erro: 'Acesso não autorizado' };
    return;
  }

  await next();
};
