const sass = require('@stencil/sass');

exports.config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
