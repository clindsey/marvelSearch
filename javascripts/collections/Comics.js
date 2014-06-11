window.require.register("collections/Comics", function(require, module) {var ComicCollection, ComicModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

ComicModel = require('models/Comic');

config = require('config');

vent = require('vent');

ComicCollection = MediaCollection.extend({
  model: ComicModel,
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
    vent.trigger('!comics:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new ComicCollection;
});
