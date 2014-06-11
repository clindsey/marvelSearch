window.require.register("helpers/comicsList", function(require, module) {Handlebars.registerHelper('thumbnailImageSrc', function(images) {
  var firstImage;
  firstImage = _.first(images);
  if (firstImage == null) {
    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }
  return "" + firstImage.path + "/standard_xlarge." + firstImage.extension;
});
});
