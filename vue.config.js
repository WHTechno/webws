const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: false,
    host: '0.0.0.0',
    port: 8080,
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: 'fluffy-space-spork-pqvj5v9wrqv27746-8080.app.github.dev',
        port: 443,
      },
    },
  },
});
