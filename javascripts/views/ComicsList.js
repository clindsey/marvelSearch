window.require.register("views/ComicsList", function(require, module) {var ComicsListView, MediaListView, vent;

require('helpers/comicsList');

vent = require('vent');

MediaListView = require('views/MediaList');

ComicsListView = MediaListView.extend({
  el: '.comics-list',
  template: require('templates')(Handlebars)['app/templates/comicsList.hbs'],
  events: {
    'click .comics-list-item': 'onItemClick'
  },
  initialize: function() {
    MediaListView.prototype.initialize.call(this);
    return _.extend(this.events, MediaListView.prototype.events);
  },
  onItemClick: function($event) {
    var comicId;
    comicId = $($event.target).data('comic-id');
    return vent.trigger('!comic:click', {
      comicId: comicId
    });
  }
});

module.exports = ComicsListView;
});
