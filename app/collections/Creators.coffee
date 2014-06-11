MediaCollection = require 'collections/Media'
CreatorModel = require 'models/Creator'
config = require 'config'
vent = require 'vent'

CreatorCollection = MediaCollection.extend
  model: CreatorModel

  url: ->
    limit = @itemsPerPage
    offset = Math.max 0, @page * limit

    urlString = "#{config.apiBaseUri}/creators?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"
    urlString = "#{urlString}&nameStartsWith=#{@query}" if @query

    urlString

  parse: (response) ->
    vent.trigger '!creators:searchCount', {count: response.data.total}

    MediaCollection.prototype.parse.call this, response

module.exports = new CreatorCollection
