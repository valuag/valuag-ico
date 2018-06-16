const sass = require('@stencil/sass');
const path = require('path');

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
  copy: [{
      src: path.resolve('./node_modules/font-awesome/fonts'),
      dest: 'build/node_modules/font-awesome/fonts'
    },
    {
      src: path.resolve('./node_modules/@icon/themify-icons/themify-icons.woff'),
      dest: 'build/node_modules/@icon/themify-icons/themify-icons.woff'
    },
    {
      src: path.resolve('./node_modules/@icon/themify-icons/themify-icons.ttf'),
      dest: 'build/node_modules/@icon/themify-icons/themify-icons.ttf'
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
