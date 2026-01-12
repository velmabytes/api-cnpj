const express = require('express');
const controller = require('./controller');

const app = express();

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API key ausente' });
  }

  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'API key inválida' });
  }

  next();
}

const PORT = process.env.PORT || 3000;

app.get('/cnpj/:cnpj', apiKeyMiddleware, (req, res) => {
  const { cnpj } = req.params;
  console.log('API_KEY:', process.env.API_KEY);
  res.json({ cnpj, message: 'Consulta autorizada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

