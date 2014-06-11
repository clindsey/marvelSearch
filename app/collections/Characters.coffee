CharacterModel = require 'models/Character'
config = require 'config'
vent = require 'vent'

CharacterCollection = Backbone.Collection.extend
  model: CharacterModel

  page: 0
  itemsPerPage: config.itemsPerPage
  totalCount: 0

  url: ->
    limit = @itemsPerPage
    offset = Math.max 0, @page * limit

    "#{config.apiBaseUri}/characters?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"

  parse: (response) ->
    count = response.data.total
    @totalCount = count

    vent.trigger '!characters:searchCount', {count}

    response.data.results

module.exports = new CharacterCollection
