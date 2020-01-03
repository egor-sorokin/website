module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions']
    })
  ]
};
