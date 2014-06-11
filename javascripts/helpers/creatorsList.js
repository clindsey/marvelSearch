window.require.register("helpers/creatorsList", function(require, module) {Handlebars.registerHelper('thumbnailSrc', function(thumbnail) {
  return "" + thumbnail.path + "." + thumbnail.extension;
});
});
