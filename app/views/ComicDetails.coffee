vent = require 'vent'

ComicDetailsView = Backbone.View.extend
  el: '.media-details'

  template: require('templates')(Handlebars)['app/templates/comicDetails.hbs']

  initialize: ->
    vent.bind '!comic:click', (data) =>
      @render @collection.get data.comicId

  render: (comicModel) ->
    return unless comicModel # something happened

    @$el.modal()

    @$('.modal-content').html @template comicModel.toJSON()

    this

module.exports = ComicDetailsView
