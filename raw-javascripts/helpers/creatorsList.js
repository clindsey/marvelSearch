Handlebars.registerHelper('thumbnailSrc', function(thumbnail) {
  return "" + thumbnail.path + "." + thumbnail.extension;
});
