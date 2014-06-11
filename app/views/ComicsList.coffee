require 'helpers/comicsList'
vent = require 'vent'

MediaListView = require 'views/MediaList'

ComicsListView = MediaListView.extend
  el: '.comics-list'

  template: require('templates')(Handlebars)['app/templates/comicsList.hbs']

  events:
    'click .comics-list-item': 'onItemClick'

  initialize: ->
    MediaListView.prototype.initialize.call this

    _.extend @events, MediaListView.prototype.events

  onItemClick: ($event) ->
    comicId = $($event.target).data 'comic-id'

    vent.trigger '!comic:click', {comicId}

module.exports = ComicsListView
