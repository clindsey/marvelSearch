MediaDetailsView = require 'views/MediaDetails'
vent = require 'vent'

ComicDetailsView = MediaDetailsView.extend
  template: require('templates')(Handlebars)['app/templates/comicDetails.hbs']

  initialize: ->
    vent.bind '!comic:click', (data) =>
      @render @collection.get data.comicId

module.exports = ComicDetailsView
