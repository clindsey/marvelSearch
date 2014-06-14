vent = require 'vent'

describe 'View Media Tabs', ->
  mediaTabsView = undefined

  beforeEach ->
    sinon.stub vent, 'on'

    $('body').append '<div class="media-tabs">'

    mediaTabsView = new (window.require 'views/MediaTabs')

  afterEach ->
    vent.on.restore()

    $('.media-tabs').remove()

  it 'renders a template', ->
    el = mediaTabsView.render()

    expect($('ul.nav').length).to.not.equal 0

  describe 'with event listeners', ->
    view = undefined

    beforeEach ->
      view = mediaTabsView

    it 'handles characters', ->
      expect(vent.on.calledWith('!characters:searchCount', view.onCharactersSearchCount, view)).to.equal true

    it 'handles comics', ->
      expect(vent.on.calledWith('!comics:searchCount', view.onComicsSearchCount, view)).to.equal true

    it 'handles creators', ->
      expect(vent.on.calledWith('!creators:searchCount', view.onCreatorsSearchCount, view)).to.equal true

    it 'listens for search', ->
      expect(vent.on.calledWith('!search:term', view.onSearchTerm, view)).to.equal true

  describe 'search result counts', ->
    beforeEach ->
      mediaTabsView.render()

      sinon.stub $.prototype, 'html'

    afterEach ->
      $::html.restore()

    it 'clears search result count on new search', ->
      mediaTabsView.onSearchTerm()

      expect($::html.calledWith('')).to.equal true
      expect($::html.firstCall.thisValue.selector).to.equal '.media-tabs .badge'

    it 'sets correct count for character search', ->
      count = 2874
      mediaTabsView.onCharactersSearchCount {count}

      expect($::html.calledWith('2,874')).to.equal true
      expect($::html.firstCall.thisValue.selector).to.equal '.media-tabs a[href="#characters"] .badge'

    it 'sets correct count for comics search', ->
      count = 8478782
      mediaTabsView.onComicsSearchCount {count}

      expect($::html.calledWith('8,478,782')).to.equal true
      expect($::html.firstCall.thisValue.selector).to.equal '.media-tabs a[href="#comics"] .badge'

    it 'sets correct count for creators search', ->
      count = 82
      mediaTabsView.onCreatorsSearchCount {count}

      expect($::html.calledWith('82')).to.equal true
      expect($::html.firstCall.thisValue.selector).to.equal '.media-tabs a[href="#creators"] .badge'
