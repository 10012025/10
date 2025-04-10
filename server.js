// server.js
const cors_proxy = require('cors-anywhere');

// Настройки прокси
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
  originWhitelist: [], // Оставь пустым — разрешены все домены
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
  console.log(`🚀 CORS Anywhere запущен на http://${host}:${port}`);
});
