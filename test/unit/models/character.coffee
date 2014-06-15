CharacterModel = require 'models/Character'

describe 'Model Character', ->
  characterModel = undefined

  beforeEach ->
    sinon.stub Backbone.Model, 'extend'
    require.cache['models/Character'].state = 'registered' # load up the module fresh
    CharacterModel = require 'models/Character'

  afterEach ->
    Backbone.Model.extend.restore()

  it 'extends Backbone.Model', ->
    expect(Backbone.Model.extend.called).to.equal true
