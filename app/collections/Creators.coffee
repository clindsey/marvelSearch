CreatorModel = require 'models/Creator'
config = require 'config'
vent = require 'vent'

CreatorCollection = Backbone.Collection.extend
  model: CreatorModel

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

    urlString = "#{config.apiBaseUri}/creators?apikey=#{config.apiKey}&limit=#{limit}&offset=#{offset}"
    urlString = "#{urlString}&nameStartsWith=#{@query}" if @query

    urlString

  parse: (response) ->
    count = response.data.total
    @totalCount = count

    vent.trigger '!creators:searchCount', {count}

    response.data.results

module.exports = new CreatorCollection
