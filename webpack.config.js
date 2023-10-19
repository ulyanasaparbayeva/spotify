const path = require('path');

module.exports = {
  // other Webpack configuration options...

  resolve: {
    fallback: {
      "https": require.resolve("https-browserify")
    }
  }
};
