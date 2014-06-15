ComicModel = require 'models/Comic'

describe 'Model Comic', ->
  comicModel = undefined

  beforeEach ->
    sinon.stub Backbone.Model, 'extend'
    require.cache['models/Comic'].state = 'registered' # load up the module fresh
    ComicModel = require 'models/Comic'

  afterEach ->
    Backbone.Model.extend.restore()

  it 'extends Backbone.Model', ->
    expect(Backbone.Model.extend.called).to.equal true
