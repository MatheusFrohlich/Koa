const banco = require('../modelos/banco');
const cloudinary = require('../servicos/cloudinaryServico');

exports.listarTarefas = async ctx => {
  const [tarefas] = await banco.query('SELECT * FROM tarefas');
  ctx.body = tarefas;
};

exports.adicionarTarefa = async ctx => {
  const { titulo, descricao, imagemBase64 } = ctx.request.body;

  let urlImagem = null;
  if (imagemBase64) {
    urlImagem = await cloudinary.enviarImagem(imagemBase64);
  }

  await banco.query(
    'INSERT INTO tarefas (titulo, descricao, url_imagem) VALUES (?, ?, ?)',
    [titulo, descricao, urlImagem]
  );

  ctx.body = { mensagem: 'Tarefa adicionada com sucesso!' };
};

exports.atualizarTarefa = async ctx => {
  const id = ctx.params.id;
  const { titulo, descricao } = ctx.request.body;

  await banco.query('UPDATE tarefas SET titulo = ?, descricao = ? WHERE id = ?', [titulo, descricao, id]);
  ctx.body = { mensagem: 'Tarefa atualizada com sucesso!' };
};

exports.excluirTarefa = async ctx => {
  const id = ctx.params.id;
  await banco.query('DELETE FROM tarefas WHERE id = ?', [id]);
  ctx.body = { mensagem: 'Tarefa excluída com sucesso!' };
};
