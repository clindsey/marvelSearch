Handlebars.registerHelper('thumbnailSrc', function(thumbnail) {
  if (thumbnail == null) {
    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }
  return "" + thumbnail.path + "." + thumbnail.extension;
});
