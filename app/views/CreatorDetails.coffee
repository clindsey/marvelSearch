MediaDetailsView = require 'views/MediaDetails'
vent = require 'vent'

CreatorDetailsView = MediaDetailsView.extend
  template: require('templates')(Handlebars)['app/templates/creatorDetails.hbs']

  initialize: ->
    vent.bind '!creator:click', (data) =>
      @render @collection.get data.creatorId

module.exports = CreatorDetailsView
