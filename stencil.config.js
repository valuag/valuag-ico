const sass = require('@stencil/sass');

exports.config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass(),
    {
      options(input) {
        input.context = 'window';
        return input;
      },
      transform(data) {
        return data.replace('var l=this;', 'var l=window;');
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
      'node_modules/punycode/punycode.js': ['toASCII'],
      'node_modules/firebaseui/dist/npm.js': ['auth']
    }
  }
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
