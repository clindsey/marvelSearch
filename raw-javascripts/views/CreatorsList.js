var CreatorsListView, MediaListView, vent;

require('helpers/creatorsList');

vent = require('vent');

MediaListView = require('views/MediaList');

CreatorsListView = MediaListView.extend({
  el: '.creators-list',
  template: require('templates')(Handlebars)['app/templates/creatorsList.hbs'],
  events: {
    'click .creators-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var creatorId;
    creatorId = $($event.target).data('creator-id');
    return vent.trigger('!creator:click', {
      creatorId: creatorId
    });
  }
});

module.exports = CreatorsListView;
