ComicModel = require 'models/Comic'
config = require 'config'
vent = require 'vent'

ComicCollection = Backbone.Collection.extend
  model: ComicModel

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

    urlString = "#{config.apiBaseUri}/comics?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"
    urlString = "#{urlString}&titleStartsWith=#{@query}" if @query

    urlString

  parse: (response) ->
    count = response.data.total
    @totalCount = count

    vent.trigger '!comics:searchCount', {count}

    response.data.results

module.exports = new ComicCollection
