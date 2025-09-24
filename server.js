// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // ポート番号は必要に応じて変更

// 静的ファイルを提供するディレクトリ
// 例えば、この server.js と同じ階層に 'public' フォルダを置く
app.use(express.static(path.join(__dirname, 'public')));

// ルートアクセス時に index.html を返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`静的ファイルサーバーが http://localhost:${PORT} で起動しました`);
});
