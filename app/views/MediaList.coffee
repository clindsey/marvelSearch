require 'helpers/mediaList'

MediaListView = Backbone.View.extend
  events:
    'click .pagination .page-number a': 'onPageNumberClick'
    'click .pagination .page-back a': 'onPageBackClick'
    'click .pagination .page-forward a': 'onPageForwardClick'

  initialize: ->
    @listenTo @collection, 'sync', @onCollectionSync
    @listenTo @collection, 'request', @onCollectionRequest

  render: (showCollection = true) ->
    showLoading = !showCollection
    @$el.html @template {@collection, showLoading}

    this

  onPageNumberClick: ($event) ->
    $event.preventDefault()

    return if $($event.target).parent().hasClass 'active'

    selectedPage = parseInt($($event.target).html(), 10) - 1

    @collection.page = selectedPage

    @collection.fetch()

  onPageBackClick: ($event) ->
    $event.preventDefault()

    return if $($event.target).parent().hasClass 'disabled'

    @collection.page = Math.max 0, @collection.page - 1

    @collection.fetch()

  onPageForwardClick: ($event) ->
    $event.preventDefault()

    return if $($event.target).parent().hasClass 'disabled'

    pagesCount = Math.ceil @collection.totalCount / @collection.itemsPerPage

    @collection.page = Math.min pagesCount - 1, @collection.page + 1

    @collection.fetch()

  onCollectionRequest: ->
    @render false

  onCollectionSync: ->
    @render()

module.exports = MediaListView
