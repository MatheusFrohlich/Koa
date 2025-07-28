// servicos/cloudinaryServico.js
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuração da conta Cloudinary (usa variáveis de ambiente do arquivo .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Função para fazer upload de arquivos
async function fazerUpload(arquivoCaminho) {
  try {
    const resultado = await cloudinary.uploader.upload(arquivoCaminho, {
      folder: 'TaskFlow',
    });
    return resultado.secure_url;
  } catch (erro) {
    console.error('Erro ao fazer upload no Cloudinary:', erro);
    throw erro;
  }
}

module.exports = {
  fazerUpload,
};
