window.require.register("collections/Creators", function(require, module) {var CreatorCollection, CreatorModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

CreatorModel = require('models/Creator');

config = require('config');

vent = require('vent');

CreatorCollection = MediaCollection.extend({
  model: CreatorModel,
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
    vent.trigger('!creators:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new CreatorCollection;
});
