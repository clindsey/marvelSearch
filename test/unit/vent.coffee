describe 'vent', ->
  vent = undefined

  beforeEach ->
    sinon.stub _, 'extend'
    require.cache['vent'].state = 'registered' # load up the module fresh
    vent = require 'vent'

  afterEach ->
    _.extend.restore()

  it 'extends Backbone.Event', ->
    expect(_.extend.calledWith({}, Backbone.Events)).to.equal true
