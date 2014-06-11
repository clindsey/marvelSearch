require 'helpers/creatorsList'
vent = require 'vent'

MediaListView = require 'views/MediaList'

CreatorsListView = MediaListView.extend
  el: '.creators-list'

  template: require('templates')(Handlebars)['app/templates/creatorsList.hbs']

  events:
    'click .creators-list-item': 'onItemClick'

  initialize: ->
    MediaListView.prototype.initialize.call this

    _.extend @events, MediaListView.prototype.events

  onItemClick: ($event) ->
    creatorId = $($event.target).data 'creator-id'

    vent.trigger '!creator:click', {creatorId}

module.exports = CreatorsListView
