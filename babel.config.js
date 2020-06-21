module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      plugins: ['dynamic-import-node']
    },
    production: {
      plugins: ['@babel/plugins-syntax-dynamic-import']
    }
  }
}
