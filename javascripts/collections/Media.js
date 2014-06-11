window.require.register("collections/Media", function(require, module) {var MediaCollection, config, vent;

config = require('config');

vent = require('vent');

MediaCollection = Backbone.Collection.extend({
  page: 0,
  itemsPerPage: config.itemsPerPage,
  totalCount: 0,
  query: '',
  initialize: function() {
    return vent.on('!search:term', this.onSearchTerm, this);
  },
  onSearchTerm: function(data) {
    this.totalCount = 0;
    this.query = data.query;
    this.page = 0;
    return this.fetch();
  },
  parse: function(response) {
    this.totalCount = response.data.total;
    return response.data.results;
  }
});

module.exports = MediaCollection;
});
