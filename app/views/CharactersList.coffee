require 'helpers/charactersList'
vent = require 'vent'

MediaListView = require 'views/MediaList'

CharactersListView = MediaListView.extend
  el: '.characters-list'

  template: require('templates')(Handlebars)['app/templates/charactersList.hbs']

  events:
    'click .characters-list-item': 'onItemClick'

  initialize: ->
    MediaListView.prototype.initialize.call this

    _.extend @events, MediaListView.prototype.events

  onItemClick: ($event) ->
    characterId = $($event.target).data 'character-id'

    vent.trigger '!character:click', {characterId}

module.exports = CharactersListView
