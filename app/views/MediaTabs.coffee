vent = require 'vent'

MediaTabsView = Backbone.View.extend
  el: '.media-tabs'

  template: require('templates')(Handlebars)['app/templates/mediaTabs.hbs']

  initialize: ->
    vent.on '!characters:searchCount', @onCharactersSearchCount, this
    vent.on '!comics:searchCount', @onComicsSearchCount, this
    vent.on '!creators:searchCount', @onCreatorsSearchCount, this

  render: ->
    @$el.html @template {}

    this

  onCharactersSearchCount: (data) ->
    @$('a[href="#characters"] .badge').html formatNumber data.count

  onComicsSearchCount: (data) ->
    @$('a[href="#comics"] .badge').html formatNumber data.count

  onCreatorsSearchCount: (data) ->
    @$('a[href="#creators"] .badge').html formatNumber data.count

formatNumber = (number) ->
  ("#{number}").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')

module.exports = MediaTabsView
