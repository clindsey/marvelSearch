var CharactersListView, MediaListView, vent;

require('helpers/charactersList');

vent = require('vent');

MediaListView = require('views/MediaList');

CharactersListView = MediaListView.extend({
  el: '.characters-list',
  template: require('templates')(Handlebars)['app/templates/charactersList.hbs'],
  events: {
    'click .characters-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var characterId;
    characterId = $($event.target).data('character-id');
    return vent.trigger('!character:click', {
      characterId: characterId
    });
  }
});

module.exports = CharactersListView;
