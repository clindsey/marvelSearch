window.require.register("views/MediaTabs", function(require, module) {var MediaTabsView, formatNumber, vent;

vent = require('vent');

MediaTabsView = Backbone.View.extend({
  el: '.media-tabs',
  template: require('templates')(Handlebars)['app/templates/mediaTabs.hbs'],
  initialize: function() {
    vent.on('!characters:searchCount', this.onCharactersSearchCount, this);
    vent.on('!comics:searchCount', this.onComicsSearchCount, this);
    vent.on('!creators:searchCount', this.onCreatorsSearchCount, this);
    return vent.on('!search:term', this.onSearchTerm, this);
  },
  render: function() {
    this.$el.html(this.template({}));
    return this;
  },
  onSearchTerm: function() {
    return this.$('.badge').html('');
  },
  onCharactersSearchCount: function(data) {
    return this.$('a[href="#characters"] .badge').html(formatNumber(data.count));
  },
  onComicsSearchCount: function(data) {
    return this.$('a[href="#comics"] .badge').html(formatNumber(data.count));
  },
  onCreatorsSearchCount: function(data) {
    return this.$('a[href="#creators"] .badge').html(formatNumber(data.count));
  }
});

formatNumber = function(number) {
  return ("" + number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

module.exports = MediaTabsView;
});
