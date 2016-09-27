module.exports = {
    '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
}
