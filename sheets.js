const { google } = require('googleapis');

async function readSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A:Z', // ajuste o nome da aba se necessário
  });

  return res.data.values; // linhas da planilha
}

module.exports = { readSheet };
