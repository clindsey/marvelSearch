var CreatorCollection, CreatorModel, config, vent;

CreatorModel = require('models/Creator');

config = require('config');

vent = require('vent');

CreatorCollection = Backbone.Collection.extend({
  model: CreatorModel,
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
    urlString = "" + config.apiBaseUri + "/creators?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&nameStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    var count;
    count = response.data.total;
    this.totalCount = count;
    vent.trigger('!creators:searchCount', {
      count: count
    });
    return response.data.results;
  }
});

module.exports = new CreatorCollection;
