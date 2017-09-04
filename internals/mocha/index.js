require('babel-polyfill'); // eslint-disable-line
require('babel-core/register')({ // eslint-disable-line
  plugins: ['transform-async-to-generator'],
});
