MediaDetailsView = require 'views/MediaDetails'
vent = require 'vent'
require 'helpers/characterDetails'

CharacterDetailsView = MediaDetailsView.extend
  template: require('templates')(Handlebars)['app/templates/characterDetails.hbs']

  initialize: ->
    vent.bind '!character:click', (data) =>
      @render @collection.get data.characterId

module.exports = CharacterDetailsView
