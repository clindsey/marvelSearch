config = require 'config'
vent = require 'vent'

MediaCollection = Backbone.Collection.extend
  page: 0
  itemsPerPage: config.itemsPerPage
  totalCount: 0
  query: ''

  initialize: ->
    vent.on '!search:term', @onSearchTerm, this

  onSearchTerm: (data) ->
    @totalCount = 0
    @query = data.query
    @page = 0
    @fetch()

  parse: (response) ->
    @totalCount = response.data.total

    response.data.results

module.exports = MediaCollection
