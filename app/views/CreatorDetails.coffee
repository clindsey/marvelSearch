vent = require 'vent'

CreatorDetailsView = Backbone.View.extend
  el: '.media-details'

  template: require('templates')(Handlebars)['app/templates/creatorDetails.hbs']

  initialize: ->
    vent.bind '!creator:click', (data) =>
      @render @collection.get data.creatorId

  render: (creatorModel) ->
    return unless creatorModel # something happened

    @$el.modal()

    @$('.modal-content').html @template creatorModel.toJSON()

    this

module.exports = CreatorDetailsView
