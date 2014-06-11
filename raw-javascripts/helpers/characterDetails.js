Handlebars.registerHelper('buildLinks', function(urls) {
  var $aEl, $liEl, $ulEl, url, _i, _len;
  $ulEl = $('<ul>');
  for (_i = 0, _len = urls.length; _i < _len; _i++) {
    url = urls[_i];
    $liEl = $('<li>');
    $aEl = $("<a href='" + url.url + "'>");
    $aEl.html(url.type);
    $liEl.append($aEl);
    $ulEl.append($liEl);
  }
  return $ulEl[0].outerHTML;
});
