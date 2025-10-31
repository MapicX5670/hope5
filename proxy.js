cd /opt/render/project/src
const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Forward the request to the destination URL
  proxy.web(req, res, { target: req.url, changeOrigin: true }, (err) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Proxy error');
  });
});

// Listen on port 8080
server.listen(8080, () => {
  console.log('HTTP Proxy running on http://localhost:8080');
});
