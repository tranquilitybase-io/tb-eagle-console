var process = require('process');
var proxyTarget = process.env.PROXY_TARGET || 'http://localhost:3000';
const PROXY_CONFIG = [
  {
    context: ['/api/**'],
    target: proxyTarget,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true
  }
];
module.exports = PROXY_CONFIG;
