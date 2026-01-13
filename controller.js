const { readSheet } = require('./sheets');

module.exports = async (req, res) => {
  try {
    const rows = await readSheet();
    res.json({ totalLinhas: rows.length, amostra: rows.slice(0, 2) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao ler planilha' });
  }
};
