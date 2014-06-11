CharacterModel = require 'models/Character'
config = require 'config'
vent = require 'vent'

CharacterCollection = Backbone.Collection.extend
  model: CharacterModel

  page: 0
  itemsPerPage: config.itemsPerPage
  totalCount: 0
  query: ''

  initialize: ->
    vent.on '!search:term', @onSearchTerm, this

  onSearchTerm: (data) ->
    @query = data.query
    @page = 0
    @fetch()

  url: ->
    limit = @itemsPerPage
    offset = Math.max 0, @page * limit

    urlString = "#{config.apiBaseUri}/characters?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"
    urlString = "#{urlString}&nameStartsWith=#{@query}" if @query

    urlString

  parse: (response) ->
    count = response.data.total
    @totalCount = count

    vent.trigger '!characters:searchCount', {count}

    response.data.results

module.exports = new CharacterCollection
