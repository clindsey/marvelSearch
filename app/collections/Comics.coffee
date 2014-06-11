MediaCollection = require 'collections/Media'
ComicModel = require 'models/Comic'
config = require 'config'
vent = require 'vent'

ComicCollection = MediaCollection.extend
  model: ComicModel

  url: ->
    limit = @itemsPerPage
    offset = Math.max 0, @page * limit

    urlString = "#{config.apiBaseUri}/comics?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"
    urlString = "#{urlString}&titleStartsWith=#{@query}" if @query

    urlString

  parse: (response) ->
    vent.trigger '!comics:searchCount', {count: response.data.total}

    MediaCollection.prototype.parse.call this, response

module.exports = new ComicCollection
