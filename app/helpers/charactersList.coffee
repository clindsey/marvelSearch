Handlebars.registerHelper 'characterThumbnailSrc', (thumbnail) ->
  return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' unless thumbnail?

  "#{thumbnail.path}.#{thumbnail.extension}"
