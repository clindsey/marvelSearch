Handlebars.registerHelper 'comicThumbnailImageSrc', (images) ->
  firstImage = _.first images

  return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' unless firstImage?

  "#{firstImage.path}/standard_xlarge.#{firstImage.extension}"
