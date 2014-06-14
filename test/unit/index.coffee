describe 'index', ->
  index = undefined

  beforeEach ->
    sinon.stub Backbone.history, 'start'
    index = require 'index'

  afterEach ->
    Backbone.history.start.restore()

  it 'starts backbone history', ->
    expect(Backbone.history.start.called).to.equal true
