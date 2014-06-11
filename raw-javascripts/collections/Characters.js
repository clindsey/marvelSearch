var CharacterCollection, CharacterModel, MediaCollection, config, vent;

MediaCollection = require('collections/Media');

CharacterModel = require('models/Character');

config = require('config');

vent = require('vent');

CharacterCollection = MediaCollection.extend({
  model: CharacterModel,
  url: function() {
    var limit, offset, urlString;
    limit = this.itemsPerPage;
    offset = Math.max(0, this.page * limit);
    urlString = "" + config.apiBaseUri + "/characters?apikey=" + config.apiKey + "&limit=" + limit + "&offset=" + offset;
    if (this.query) {
      urlString = "" + urlString + "&nameStartsWith=" + this.query;
    }
    return urlString;
  },
  parse: function(response) {
    vent.trigger('!characters:searchCount', {
      count: response.data.total
    });
    return MediaCollection.prototype.parse.call(this, response);
  }
});

module.exports = new CharacterCollection;
