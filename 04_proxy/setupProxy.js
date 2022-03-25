const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/api1', { 
            target: 'http://localhost:5050',
            changeOrigin: true,
            pathRewrite: {'^/api1' : ''} 
        }),
        proxy('/api2', { 
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2' : ''} 
        })
    );
}