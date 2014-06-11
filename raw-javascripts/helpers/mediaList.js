var buildPaginationItem;

Handlebars.registerHelper('buildMediaList', function(collection, options) {
  var $rowEl, output;
  output = '';
  $rowEl = $('<div class="row">');
  collection.each(function(mediaItem, index) {
    var $mediaEl;
    if (index !== 0 && index % 4 === 0) {
      output += $rowEl[0].outerHTML;
      $rowEl = $('<div class="row">');
    }
    $mediaEl = $('<div class="col-xs-6 col-md-3">');
    $mediaEl.html(options.fn(mediaItem.toJSON()));
    return $rowEl.append($mediaEl);
  });
  output += $rowEl[0].outerHTML;
  return output;
});

Handlebars.registerHelper('buildPagination', function(collection) {
  var $liEl, $outEl, endIndex, pageIndex, pagesCount, startIndex, _i;
  $outEl = $('<div class="pagination">');
  pagesCount = Math.ceil(collection.totalCount / collection.itemsPerPage);
  $liEl = buildPaginationItem('&laquo;', 'page-back', collection.page === 0, 'disabled');
  $outEl.append($liEl);
  startIndex = Math.max(collection.page - 3, 0);
  endIndex = Math.min(startIndex + 6, Math.max(0, pagesCount - 1));
  for (pageIndex = _i = startIndex; startIndex <= endIndex ? _i <= endIndex : _i >= endIndex; pageIndex = startIndex <= endIndex ? ++_i : --_i) {
    $liEl = buildPaginationItem(pageIndex + 1, 'page-number', pageIndex === collection.page, 'active');
    $outEl.append($liEl);
  }
  $liEl = buildPaginationItem('&raquo;', 'page-forward', (collection.page === pagesCount - 1) || pagesCount === 0, 'disabled');
  $outEl.append($liEl);
  return $outEl[0].outerHTML;
});

buildPaginationItem = function(htmlText, className, condition, conditionalClassName) {
  var $aEl, $liEl;
  $liEl = $('<li>');
  $liEl.addClass(className);
  if (condition) {
    $liEl.addClass(conditionalClassName);
  }
  $aEl = $('<a href="#">').html(htmlText);
  $liEl.append($aEl);
  return $liEl;
};
