vent = window.require 'vent'

SearchAreaView = Backbone.View.extend
  el: '.search-area'

  template: require('templates')(Handlebars)['app/templates/searchArea.hbs']

  events:
    'keydown input': 'onKeydownInput'

  render: ->
    @$el.html @template {}

    this

  onKeydownInput: ($event) ->
    if $event.keyCode is 13
      $event.preventDefault()

      query = @$('input').val()

      $($event.target).blur()

      vent.trigger '!search:term', {query}

module.exports = SearchAreaView
