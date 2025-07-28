const Router = require('koa-router');
const tarefas = require('../controladores/tarefascontrolador');
const autenticar = require('../middlewares/autenticacao');

const rotas = new Router();

// Listar
rotas.get('/', tarefas.listarTarefas);

// Criar, atualizar e excluir protegidas
rotas.post('/', autenticar, tarefas.adicionarTarefa);
rotas.put('/:id', autenticar, tarefas.atualizarTarefa);
rotas.delete('/:id', autenticar, tarefas.excluirTarefa);

module.exports = rotas;
