module.exports = (req, res) => {
  const { cnpj } = req.params;

  return res.json({
    cnpj,
    status: 'ok',
    mensagem: 'Controller funcionando'
  });
};
