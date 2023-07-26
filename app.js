const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurando o body-parser para analisar o conteúdo das requisições POST
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para receber os dados do formulário
app.post('/enviar', (req, res) => {
  const { email, phone, message } = req.body;

  // Aqui, você pode processar os dados recebidos do formulário (por exemplo, salvar em um banco de dados, enviar por e-mail, etc.)

  // Responda ao cliente com uma mensagem de sucesso (você pode personalizar conforme necessário)
  res.send('Dados recebidos com sucesso!');

  // Alternativamente, você pode redirecionar o cliente para outra página após o envio bem-sucedido
  // res.redirect('/pagina-de-agradecimento');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
