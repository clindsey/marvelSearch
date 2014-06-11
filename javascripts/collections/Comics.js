window.require.register("collections/Comics", function(require, module) {var ComicCollection, ComicModel, config, vent;

ComicModel = require('models/Comic');

config = require('config');

vent = require('vent');

ComicCollection = Backbone.Collection.extend({
  model: ComicModel,
  page: 0,
  itemsPerPage: config.itemsPerPage,
  totalCount: 0,
  query: '',
  initialize: function() {
    return vent.on('!search:term', this.onSearchTerm, this);
  },
  onSearchTerm: function(data) {
    this.query = data.query;
    this.page = 0;
    return this.fetch();
  },
  url: function() {
    var limit, offset, urlString;
    limit = this.itemsPerPage;
    offset = Math.max(0, this.page * limit);
    urlString = "" + config.apiBaseUri + "/comics?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&titleStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    var count;
    count = response.data.total;
    this.totalCount = count;
    vent.trigger('!comics:searchCount', {
      count: count
    });
    return response.data.results;
  }
});

module.exports = new ComicCollection;
});
