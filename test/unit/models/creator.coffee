CreatorModel = require 'models/Creator'

describe 'Model Creator', ->
  creatorModel = undefined

  beforeEach ->
    sinon.stub Backbone.Model, 'extend'
    require.cache['models/Creator'].state = 'registered' # load up the module fresh
    CreatorModel = require 'models/Creator'

  afterEach ->
    Backbone.Model.extend.restore()

  it 'extends Backbone.Model', ->
    expect(Backbone.Model.extend.called).to.equal true
