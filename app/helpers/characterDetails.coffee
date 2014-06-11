Handlebars.registerHelper 'buildLinks', (urls) ->
  $ulEl = $ '<ul>'

  for url in urls
    $liEl = $ '<li>'

    $aEl = $ "<a href='#{url.url}'>"
    $aEl.html url.type

    $liEl.append $aEl

    $ulEl.append $liEl

  $ulEl[0].outerHTML
