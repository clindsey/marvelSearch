vent = require 'vent'
require 'helpers/characterDetails'

CharacterDetailsView = Backbone.View.extend
  el: '.media-details'

  template: require('templates')(Handlebars)['app/templates/characterDetails.hbs']

  initialize: ->
    vent.bind '!character:click', (data) =>
      @render @collection.get data.characterId

  render: (characterModel) ->
    return unless characterModel # something happened

    @$el.modal()

    @$('.modal-content').html @template characterModel.toJSON()

    this

module.exports = CharacterDetailsView
