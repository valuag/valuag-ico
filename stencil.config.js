const sass = require('@stencil/sass');

exports.config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass(),
    {
      options(input) {
        input.context = 'window';
        return input;
      }
    }
  ],
  nodeResolve: {
    preferBuiltins: true,
    browser: true
  },
  commonjs: {
    include: [
      'node_modules/**'
    ],
    namedExports: {
      'node_modules/punycode/punycode.js': ['toASCII']
    }
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
