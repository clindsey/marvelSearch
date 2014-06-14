vent = require 'vent'

describe 'View Search Area', ->
  searchAreaView = undefined

  beforeEach ->
    sinon.stub vent, 'trigger'

    $('body').append '<div class="search-area">'

    searchAreaView = new (require 'views/SearchArea')

  afterEach ->
    vent.trigger.restore()

    $('.search-area').remove()

  it 'renders a template', ->
    el = searchAreaView.render()

    expect($('#inputSearch').length).to.not.equal 0

  describe 'with keypress', ->
    keypressEvent = undefined
    el = undefined

    beforeEach ->
      el = searchAreaView.render()
      keypressEvent = jQuery.Event 'keydown'
      keypressEvent.keyCode = 13
      sinon.spy keypressEvent, 'preventDefault'

    it 'prevents default on enter', ->
      el.$('input').val 'something'
      el.$('input').trigger keypressEvent
      expect((keypressEvent.preventDefault).called).to.equal true

    it 'triggers a search event on `enter`', ->
      el.$('input').val 'something'
      el.$('input').trigger keypressEvent

      expect(vent.trigger.calledWith('!search:term', {query: 'something'})).to.equal true

    it 'calls blur on input on search submit', ->
      sinon.spy $.prototype, 'blur'

      $el = el.$('input')

      $el.val 'something else'
      $el.trigger keypressEvent

      expect($::blur.firstCall.thisValue[0]).to.equal $el[0]

      $::blur.restore()
