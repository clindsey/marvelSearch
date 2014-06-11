Handlebars.registerHelper 'buildMediaList', (collection, options) ->
  output = ''
  $rowEl = $ '<div class="row">'

  collection.each (mediaItem, index) ->
    if index isnt 0 and index % 4 is 0
      output += $rowEl[0].outerHTML
      $rowEl = $ '<div class="row">'

    $mediaEl = $ '<div class="col-xs-6 col-md-3">'

    $mediaEl.html options.fn(mediaItem.toJSON())

    $rowEl.append $mediaEl

  output += $rowEl[0].outerHTML

  output

Handlebars.registerHelper 'buildPagination', (collection) ->
  $outEl = $('<div class="pagination">')

  pagesCount = Math.ceil collection.totalCount / collection.itemsPerPage

  $liEl = buildPaginationItem '&laquo;', 'page-back', collection.page is 0, 'disabled'
  $outEl.append $liEl

  startIndex = Math.max collection.page - 3, 0
  endIndex = Math.min startIndex + 6, Math.max(0, pagesCount - 1)

  return '' if endIndex - startIndex is 0

  for pageIndex in [startIndex..endIndex]
    $liEl = buildPaginationItem pageIndex + 1, 'page-number', pageIndex is collection.page, 'active'
    $outEl.append $liEl

  $liEl = buildPaginationItem '&raquo;', 'page-forward', (collection.page is pagesCount - 1) or pagesCount is 0, 'disabled'
  $outEl.append $liEl

  $outEl[0].outerHTML

buildPaginationItem = (htmlText, className, condition, conditionalClassName) ->
  $liEl = $ '<li>'
  $liEl.addClass className
  $liEl.addClass(conditionalClassName) if condition
  $aEl = $('<a href="#">').html htmlText
  $liEl.append $aEl

  $liEl
