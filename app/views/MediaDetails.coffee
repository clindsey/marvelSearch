MediaDetailsView = Backbone.View.extend
  el: '.media-details'

  render: (mediaModel) ->
    return unless mediaModel # something happened

    @$el.modal()

    @$('.modal-content').html @template mediaModel.toJSON()

    this

module.exports = MediaDetailsView
